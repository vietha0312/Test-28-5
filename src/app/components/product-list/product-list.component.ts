import { EventEmitter, Input } from '@angular/core';
import { Component, Output } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input() products: IProduct[] = [];
  @Output() onRemove = new EventEmitter<number>();

  removeItem(id: any) {
    this.onRemove.emit(id);
  }
}

