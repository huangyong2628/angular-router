import { Component, OnInit } from '@angular/core';
import {Stock, StockService} from '../stock.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.css']
})
export class StockFormComponent implements OnInit {

  formModel: FormGroup;

  stock: Stock = new Stock(0, '', 0, 0, '', []);

  categories: string[] = ['IT', '互联网', '金融'];

  constructor(
    private routeInfo: ActivatedRoute,
    private stockService: StockService,
    private router: Router
  ) { }

  ngOnInit() {

    const stockId = this.routeInfo.snapshot.params['id'];

    const fb = new FormBuilder();
    this.formModel = fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', Validators.required],
      desc: [''],
      categories: fb.array([
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
      ], this.categoriesValidator)
    });

    this.stockService.getStock(stockId).subscribe(
      data => {
        this.stock = data;
        this.formModel.reset({
          name: data.name,
          price: data.price,
          desc: data.desc,
          categories: [
            data.categories.indexOf(this.categories[0]) !== -1,
            data.categories.indexOf(this.categories[1]) !== -1,
            data.categories.indexOf(this.categories[2]) !== -1,
          ]
        });
      }
    );

  }

  categoriesValidator(control: FormArray) {
    let valid = false;
    control.controls.forEach(
      c => {
        if (c.value) {
          valid = true;
        }
      }
    )
    if (valid) {
      return null;
    } else {
      return {categoriesLength: true};
    }
  }

  save() {
    const chCategories = [];
    let index = 0;
    for (let i = 0; i < 3; i++) {
      if (this.formModel.value.categories[i]) {
        chCategories[index++] = this.categories[i];
      }
    }
    this.formModel.value.categories = chCategories;
    this.formModel.value.roting = this.stock.roting;
    console.log(this.formModel.value);
    // console.log(this.stock.roting);
    // this.router.navigateByUrl('stock');
  }

  cancel() {
    this.router.navigateByUrl('stock');
  }
}
