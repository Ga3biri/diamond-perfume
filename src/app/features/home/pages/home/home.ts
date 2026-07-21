import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { signal } from '@angular/core';
import { PRODUCTS } from '../../../../../core/constants/products';
import { ProductSection } from "../../components/product-section/product-section";
import { Categories } from "../../components/categories/categories";
import { About } from "../../components/about/about";
import { Features } from "../../components/features/features";
import { Faq } from "../../components/faq/faq";
import { Newsletter } from "../../components/newsletter/newsletter";
import { Brands } from "../../components/brands/brands";

@Component({
  selector: 'app-home',
  imports: [ProductSection, Hero, Categories, About, Features, Faq, Newsletter, Brands],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  products = signal(PRODUCTS);
}