import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  productForm: FormGroup;

  ngOnInit() {
    this.productForm = this.fb.group({
      title: [],
      selling_points: this.fb.array([this.fb.group({ point: '' })])
    })
  }

  get sellingPoints() {
    return this.productForm.get('selling_points') as FormArray;
  }

  addSellingPoint() {
    this.sellingPoints.push(this.fb.group({point:''}));
  }

  deleteSellingPoint(index) {
    this.sellingPoints.removeAt(index);
  }

}
