import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  //Inyeccion de dependencias de ActivatedRoute, CartService.
  //Además crea al vuelo los campos privados
  constructor(private route: ActivatedRoute,
    private cartService: CartService) {}

  ngOnInit() {
    //Obtener el id de producto pasado por la ruta
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //Buscar de la lista de productos el que coincida con mi variable productIdFromRoute
    this.product = products.find((p) => p.id == productIdFromRoute);
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');    
  }
}
