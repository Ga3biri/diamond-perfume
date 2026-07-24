const fs = require('fs');

// 1. brands.ts
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

// 2. brands.html
fs.writeFileSync('src/app/features/brands/pages/brands/brands.html', `<section class="brands-page">
  <div class="page-header">
    <div class="container-custom">
      <h1>Our Brands</h1>
      <p>Explore premium fragrance brands we carry</p>
    </div>

  <div class="container-custom">
    <div class="brands-grid">
      @for(brand of brands(); track brand.name){
        <a [routerLink]="['/categories']" [queryParams]="{brand: brand.name}" class="brand-card-link">
          <div class="brand-card">
            <img [src]="brand.image" [alt]="brand.name">
            <h3>{{brand.name}}</h3>
          </div>
        </a>
      }
    </div>
</section>
`);

// 3. brands.scss
fs.writeFileSync('src/app/features/brands/pages/brands/brands.scss', `.brands-page {
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
`);

// 4. about.ts
fs.writeFileSync('src/app/features/about/about.ts', `import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutPage {}
`);

// 5. about.html
fs.writeFileSync('src/app/features/about/about.html', `<section class="about-page">
  <div class="page-header">
    <div class="container-custom">
      <h1>About Us</h1>
      <p>Discover the story behind EL-ALFY Perfumes</p>
    </div>

  <div class="container-custom">
    <div class="about-content">
      <div class="about-image">
        <img src="images/about/about.png" alt="EL-ALFY Perfumes">
      </div>
      <div class="about-text">
        <span class="subtitle">OUR STORY</span>
        <h2>EL-ALFY Perfumes</h2>
        <p>
          EL-ALFY Perfumes provides premium fragrances inspired by the world's most luxurious perfumes 
          while maintaining exceptional quality and long-lasting performance.
        </p>
        <p>
          We believe that everyone deserves to experience the luxury of fine fragrances without 
          the extravagant price tag. Our master perfumers carefully craft each scent to capture 
          the essence of the world's most beloved perfumes.
        </p>
        <div class="stats">
          <div class="stat">
            <span class="stat-number">50+</span>
            <span class="stat-label">Premium Scents</span>
          </div>
          <div class="stat">
            <span class="stat-number">10K+</span>
            <span class="stat-label">Happy Customers</span>
          </div>
          <div class="stat">
            <span class="stat-number">4.8</span>
            <span class="stat-label">Average Rating</span>
          </div>
      </div>
  </div>
</section>
`);

// 6. about.scss
fs.writeFileSync('src/app/features/about/about.scss', `.about-page {
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
`);

// 7. contact.ts
fs.writeFileSync('src/app/features/contact/contact.ts', `import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactPage {}
`);

// 8. contact.html
fs.writeFileSync('src/app/features/contact/contact.html', `<section class="contact-page">
  <div class="page-header">
    <div class="container-custom">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you</p>
    </div>

  <div class="container-custom">
    <div class="contact-grid">
      <div class="contact-info">
        <h2>Get In Touch</h2>
        <p>Have a question, feedback, or need assistance? We're here to help!</p>
        
        <div class="info-items">
          <div class="info-item">
            <i class="bi bi-geo-alt"></i>
            <div>
              <h4>Address</h4>
              <p>Cairo, Egypt</p>
            </div>
          <div class="info-item">
            <i class="bi bi-envelope"></i>
            <div>
              <h4>Email</h4>
              <p>info@el-alfy-perfumes.com</p>
            </div>
          <div class="info-item">
            <i class="bi bi-telephone"></i>
            <div>
              <h4>Phone</h4>
              <p>+20 100 000 0000</p>
            </div>
          <div class="info-item">
            <i class="bi bi-clock"></i>
            <div>
              <h4>Working Hours</h4>
              <p>Sat - Thu: 10:00 AM - 10:00 PM</p>
            </div>
        </div>

      <form class="contact-form">
        <div class="form-row">
          <div class="form-group">
            <label for="name">Your Name</label>
            <input type="text" id="name" placeholder="John Doe">
          </div>
          <div class="form-group">
            <label for="email">Your Email</label>
            <input type="email" id="email" placeholder="john@example.com">
          </div>
        <div class="form-group">
          <label for="subject">Subject</label>
          <input type="text" id="subject" placeholder="How can we help?">
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" rows="5" placeholder="Write your message here..."></textarea>
        </div>
        <button type="submit" class="submit-btn">
          Send Message
          <i class="bi bi-send"></i>
        </button>
      </form>
    </div>
</section>
`);

// 9. contact.scss
fs.writeFileSync('src/app/features/contact/contact.scss', `.contact-page {
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
`);

console.log('All files written successfully!');
