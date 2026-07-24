const fs = require('fs');

// Write routes
fs.writeFileSync('src/app/app.routes.ts', `import { Shop } from './features/shop/pages/shop/shop';
import { ProductDetails } from './features/shop/pages/product-details/product-details';
import { Routes } from '@angular/router';
import { BrandsPage } from './features/brands/pages/brands/brands';
import { AboutPage } from './features/about/about';
import { ContactPage } from './features/contact/contact';

export const routes: Routes = [
  {
    path:'',
    loadComponent:()=>import('./features/home/pages/home/home').then(c=>c.Home)
  },
  {
    path:'categories',
    component:Shop
  },
  {
    path:'brands',
    component:BrandsPage
  },
  {
    path:'about',
    component:AboutPage
  },
  {
    path:'contact',
    component:ContactPage
  },
  {
    path:'product/:id',
    component:ProductDetails
  }
];
`);

// Write brands.ts
fs.writeFileSync('src/app/features/brands/pages/brands/brands.ts', `import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BRANDS } from '../../../../core/constants/brands';

@Component({
  selector: 'app-brands-page',
  imports: [RouterLink],
  templateUrl: './brands.html',
  styleUrl: './brands.scss'
})
export class BrandsPage {
  brands = signal(BRANDS);
}
`);

// Write brands.html (single line to avoid escaping issues)
fs.writeFileSync('src/app/features/brands/pages/brands/brands.html',
  '<section class="brands-page">\n' +
  '  <div class="page-header">\n' +
  '    <div class="container-custom">\n' +
  '      <h1>Our Brands</h1>\n' +
  '      <p>Explore premium fragrance brands we carry</p>\n' +
  '    </div>\n' +
  '  </div>\n' +
  '  <div class="container-custom">\n' +
  '    <div class="brands-grid">\n' +
  '      @for(brand of brands(); track brand.name){\n' +
  '        <a [routerLink]="[\'/categories\']" [queryParams]="{brand: brand.name}" class="brand-card-link">\n' +
  '          <div class="brand-card">\n' +
  '            <img [src]="brand.image" [alt]="brand.name">\n' +
  '            <h3>{{brand.name}}</h3>\n' +
  '          </div>\n' +
  '        </a>\n' +
  '      }\n' +
  '    </div>\n' +
  '  </div>\n' +
  '</section>\n'
);

// Write brands.scss
fs.writeFileSync('src/app/features/brands/pages/brands/brands.scss',
  `.brands-page {
  padding-bottom: 80px;
}

.page-header {
  background: linear-gradient(135deg, #1a1a2e, #2a2a4e);
  padding: 80px 0 60px;
  text-align: center;
  margin-bottom: 60px;
  
  h1 {
    font-size: 48px;
    font-weight: 800;
    color: #fff;
    font-family: 'Playfair Display', serif;
    margin-bottom: 12px;
  }
  
  p {
    color: rgba(255,255,255,0.7);
    font-size: 18px;
  }
}

.brands-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.brand-card-link {
  text-decoration: none;
  display: block;
}

.brand-card {
  background: #fff;
  border: 1px solid #ececec;
  border-radius: 16px;
  padding: 40px 24px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  
  img {
    max-width: 140px;
    max-height: 80px;
    margin-bottom: 16px;
  }
  
  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a2e;
    font-family: 'Playfair Display', serif;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 40px rgba(0,0,0,0.1);
    border-color: #d4af37;
  }
}

@media(max-width: 991px){
  .brands-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .page-header h1 { font-size: 36px; }
}

@media(max-width: 600px){
  .brands-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  .brand-card { padding: 24px 16px; }
}
`
);

// Write about.ts
fs.writeFileSync('src/app/features/about/about.ts', `import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutPage {}
`);

// Write about.html
fs.writeFileSync('src/app/features/about/about.html',
  '<section class="about-page">\n' +
  '  <div class="page-header">\n' +
  '    <div class="container-custom">\n' +
  '      <h1>About Us</h1>\n' +
  '      <p>Discover the story behind EL-ALFY Perfumes</p>\n' +
  '    </div>\n' +
  '  </div>\n' +
  '  <div class="container-custom">\n' +
  '    <div class="about-content">\n' +
  '      <div class="about-image">\n' +
  '        <img src="images/about/about.png" alt="EL-ALFY Perfumes">\n' +
  '      </div>\n' +
  '      <div class="about-text">\n' +
  '        <span class="subtitle">OUR STORY</span>\n' +
  '        <h2>EL-ALFY Perfumes</h2>\n' +
  '        <p>EL-ALFY Perfumes provides premium fragrances inspired by the world\'s most luxurious perfumes while maintaining exceptional quality and long-lasting performance.</p>\n' +
  '        <p>We believe that everyone deserves to experience the luxury of fine fragrances without the extravagant price tag. Our master perfumers carefully craft each scent to capture the essence of the world\'s most beloved perfumes.</p>\n' +
  '        <div class="stats">\n' +
  '          <div class="stat">\n' +
  '            <span class="stat-number">50+</span>\n' +
  '            <span class="stat-label">Premium Scents</span>\n' +
  '          </div>\n' +
  '          <div class="stat">\n' +
  '            <span class="stat-number">10K+</span>\n' +
  '            <span class="stat-label">Happy Customers</span>\n' +
  '          </div>\n' +
  '          <div class="stat">\n' +
  '            <span class="stat-number">4.8</span>\n' +
  '            <span class="stat-label">Average Rating</span>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '      </div>\n' +
  '    </div>\n' +
  '  </div>\n' +
  '</section>\n'
);

// Write about.scss
fs.writeFileSync('src/app/features/about/about.scss',
  `.about-page {
  padding-bottom: 80px;
}

.page-header {
  background: linear-gradient(135deg, #1a1a2e, #2a2a4e);
  padding: 80px 0 60px;
  text-align: center;
  margin-bottom: 60px;
  
  h1 {
    font-size: 48px;
    font-weight: 800;
    color: #fff;
    font-family: 'Playfair Display', serif;
    margin-bottom: 12px;
  }
  
  p {
    color: rgba(255,255,255,0.7);
    font-size: 18px;
  }
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.about-image img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.1);
}

.about-text {
  .subtitle {
    color: #d4af37;
    letter-spacing: 3px;
    font-size: 13px;
    font-weight: 600;
    display: inline-block;
    margin-bottom: 12px;
  }
  
  h2 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #1a1a2e;
    font-family: 'Playfair Display', serif;
  }
  
  p {
    line-height: 1.8;
    color: #666;
    margin-bottom: 20px;
    font-size: 16px;
  }
}

.stats {
  display: flex;
  gap: 40px;
  margin-top: 40px;
  padding-top: 40px;
  border-top: 1px solid #ececec;
}

.stat {
  text-align: center;
  
  .stat-number {
    display: block;
    font-size: 32px;
    font-weight: 800;
    color: #d4af37;
    font-family: 'Playfair Display', serif;
  }
  
  .stat-label {
    display: block;
    font-size: 14px;
    color: #888;
    margin-top: 4px;
  }
}

@media(max-width: 991px){
  .about-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .page-header h1 { font-size: 36px; }
  .stats { gap: 24px; }
  .stat .stat-number { font-size: 26px; }
}
`
);

// Write contact.ts
fs.writeFileSync('src/app/features/contact/contact.ts', `import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactPage {}
`);

// Write contact.html
fs.writeFileSync('src/app/features/contact/contact.html',
  '<section class="contact-page">\n' +
  '  <div class="page-header">\n' +
  '    <div class="container-custom">\n' +
  '      <h1>Contact Us</h1>\n' +
  '      <p>We\'d love to hear from you</p>\n' +
  '    </div>\n' +
  '  </div>\n' +
  '  <div class="container-custom">\n' +
  '    <div class="contact-grid">\n' +
  '      <div class="contact-info">\n' +
  '        <h2>Get In Touch</h2>\n' +
  '        <p>Have a question, feedback, or need assistance? We\'re here to help!</p>\n' +
  '        <div class="info-items">\n' +
  '          <div class="info-item">\n' +
  '            <i class="bi bi-geo-alt"></i>\n' +
  '            <div>\n' +
  '              <h4>Address</h4>\n' +
  '              <p>Cairo, Egypt</p>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '          <div class="info-item">\n' +
  '            <i class="bi bi-envelope"></i>\n' +
  '            <div>\n' +
  '              <h4>Email</h4>\n' +
  '              <p>info@el-alfy-perfumes.com</p>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '          <div class="info-item">\n' +
  '            <i class="bi bi-telephone"></i>\n' +
  '            <div>\n' +
  '              <h4>Phone</h4>\n' +
  '              <p>+20 100 000 0000</p>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '          <div class="info-item">\n' +
  '            <i class="bi bi-clock"></i>\n' +
  '            <div>\n' +
  '              <h4>Working Hours</h4>\n' +
  '              <p>Sat - Thu: 10:00 AM - 10:00 PM</p>\n' +
  '            </div>\n' +
  '          </div>\n' +
  '        </div>\n' +
  '      </div>\n' +
  '      <form class="contact-form">\n' +
  '        <div class="form-row">\n' +
  '          <div class="form-group">\n' +
  '            <label for="name">Your Name</label>\n' +
  '            <input type="text" id="name" placeholder="John Doe">\n' +
  '          </div>\n' +
  '          <div class="form-group">\n' +
  '            <label for="email">Your Email</label>\n' +
  '            <input type="email" id="email" placeholder="john@example.com">\n' +
  '          </div>\n' +
  '        </div>\n' +
  '        <div class="form-group">\n' +
  '          <label for="subject">Subject</label>\n' +
  '          <input type="text" id="subject" placeholder="How can we help?">\n' +
  '        </div>\n' +
  '        <div class="form-group">\n' +
  '          <label for="message">Message</label>\n' +
  '          <textarea id="message" rows="5" placeholder="Write your message here..."></textarea>\n' +
  '        </div>\n' +
  '        <button type="submit" class="submit-btn">\n' +
  '          Send Message\n' +
  '          <i class="bi bi-send"></i>\n' +
  '        </button>\n' +
  '      </form>\n' +
  '    </div>\n' +
  '  </div>\n' +
  '</section>\n'
);

// Write contact.scss
fs.writeFileSync('src/app/features/contact/contact.scss',
  `.contact-page {
  padding-bottom: 80px;
}

.page-header {
  background: linear-gradient(135deg, #1a1a2e, #2a2a4e);
  padding: 80px 0 60px;
  text-align: center;
  margin-bottom: 60px;
  
  h1 {
    font-size: 48px;
    font-weight: 800;
    color: #fff;
    font-family: 'Playfair Display', serif;
    margin-bottom: 12px;
  }
  
  p {
    color: rgba(255,255,255,0.7);
    font-size: 18px;
  }
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  align-items: start;
}

.contact-info {
  h2 {
    font-size: 32px;
    font-weight: 700;
    color: #1a1a2e;
    font-family: 'Playfair Display', serif;
    margin-bottom: 16px;
  }
  
  > p {
    color: #666;
    line-height: 1.7;
    margin-bottom: 40px;
  }
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  
  i {
    font-size: 22px;
    color: #d4af37;
    background: rgba(212, 175, 55, 0.1);
    padding: 12px;
    border-radius: 12px;
  }
  
  h4 {
    font-size: 16px;
    font-weight: 600;
    color: #1a1a2e;
    margin-bottom: 4px;
  }
  
  p {
    color: #888;
    font-size: 14px;
  }
}

.contact-form {
  background: #fff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.06);
  border: 1px solid #f0f0f0;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  margin-bottom: 20px;
  
  label {
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: #1a1a2e;
    margin-bottom: 8px;
  }
  
  input, textarea {
    width: 100%;
    padding: 14px 16px;
    border: 1.5px solid #e8ddd0;
    border-radius: 12px;
    font-size: 14px;
    color: #1a1a2e;
    background: #fcfaf7;
    outline: none;
    transition: all 0.3s;
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    
    &:focus {
      border-color: #d4af37;
      box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
    }
    
    &::placeholder {
      color: #b0a090;
    }
  }
  
  textarea {
    resize: vertical;
    min-height: 120px;
  }
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 36px;
  background: linear-gradient(135deg, #d4af37, #c9a227);
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Playfair Display', serif;
  
  i {
    font-size: 16px;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(212, 175, 55, 0.35);
  }
}

@media(max-width: 991px){
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .page-header h1 { font-size: 36px; }
  .form-row { grid-template-columns: 1fr; }
  .contact-form { padding: 24px; }
}
`
);

// Update filters-sidebar scss
fs.writeFileSync('src/app/features/shop/components/filters-sidebar/filters-sidebar.scss',
  `.filters-sidebar {
  background: linear-gradient(145deg, #ffffff, #faf8f5);
  border-radius: 18px;
  padding: 28px 24px;
  box-shadow: 0 8px 35px rgba(180, 150, 100, 0.12), 0 2px 8px rgba(0,0,0,0.04);
  border: 1px solid rgba(212, 175, 55, 0.15);
  font-family: 'Playfair Display', serif;
}

.filter-section {
  margin-bottom: 28px;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);
  &:last-of-type {
    border-bottom: none;
    margin-bottom: 20px;
  }
}

.filter-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 17px;
  font-weight: 600;
  color: #1a1a2e;
  margin-bottom: 18px;
  letter-spacing: 0.3px;
  i {
    color: #d4af37;
    font-size: 18px;
  }
}

.filter-options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.filter-chip {
  position: relative;
  cursor: pointer;
  input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  .chip-label {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 18px;
    border-radius: 50px;
    background: #f5f0e8;
    border: 1.5px solid #e8ddd0;
    font-size: 14px;
    font-weight: 500;
    color: #5a4a3a;
    transition: all 0.3s ease;
    i {
      font-size: 12px;
      opacity: 0;
      transform: scale(0);
      transition: all 0.3s ease;
    }
    &:hover {
      border-color: #d4af37;
      background: #faf6ee;
      transform: translateY(-1px);
    }
  }
  &.active .chip-label {
    background: linear-gradient(135deg, #d4af37, #c9a227);
    border-color: #d4af37;
    color: #fff;
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
    i {
      opacity: 1;
      transform: scale(1);
    }
  }
}

.price-range-display {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  gap: 8px;
}

.price-box {
  flex: 1;
  background: #f5f0e8;
  border-radius: 10px;
  padding: 10px 14px;
  text-align: center;
  border: 1px solid #e8ddd0;
}

.price-label {
  display: block;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #8a7a6a;
  font-weight: 600;
  margin-bottom: 2px;
}

.price-value {
  display: block;
  font-size: 16px;
  font-weight: 700;
  color: #1a1a2e;
  font-family: 'Inter', sans-serif;
}

.price-separator {
  color: #d4af37;
  font-size: 18px;
  font-weight: 600;
}

.price-inputs {
  margin-top: 4px;
}

.input-wrap {
  margin-bottom: 8px;
}

.price-slider {
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background: linear-gradient(to right, #e8ddd0, #d4af37);
  outline: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: linear-gradient(135deg, #d4af37, #c9a227);
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(212, 175, 55, 0.4);
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.15);
    }
  }
  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #d4af37;
    cursor: pointer;
    border: none;
  }
}

.price-inputs-fields {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 12px;
  width: 100%;
}

.price-input {
  flex: 1;
  min-width: 0;
  width: 100%;
  max-width: 100%;
  padding: 8px 8px;
  border: 1.5px solid #e8ddd0;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 500;
  color: #1a1a2e;
  background: #fcfaf7;
  outline: none;
  transition: all 0.3s;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
  &:focus {
    border-color: #d4af37;
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
  }
  &::placeholder {
    color: #b0a090;
  }
}

.separator {
  color: #8a7a6a;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
}

.sort-wrap {
  position: relative;
}

.sort-select {
  width: 100%;
  padding: 12px 16px;
  padding-right: 40px;
  border: 1.5px solid #e8ddd0;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  color: #1a1a2e;
  background: #fcfaf7;
  outline: none;
  appearance: none;
  cursor: pointer;
  transition: all 0.3s;
  font-family: 'Inter', sans-serif;
  &:focus {
    border-color: #d4af37;
    box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
  }
}

.select-arrow {
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #d4af37;
  font-size: 14px;
  pointer-events: none;
}

.clear-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  border: 1.5px solid #d4af37;
  border-radius: 12px;
  background: transparent;
  color: #d4af37;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Playfair Display', serif;
  i {
    font-size: 16px;
  }
  &:hover {
    background: linear-gradient(135deg, #d4af37, #c9a227);
    color: #fff;
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
}
`
);

console.log('All files written successfully!');
