import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render logo and navigation links', () => {
    const logo = fixture.debugElement.query(By.css('img[alt="logo"]'));
    const navLinks = fixture.debugElement.queryAll(By.css('nav ul li a'));

    expect(logo).toBeTruthy();
    expect(navLinks.length).toBe(3); // Deve haver 3 links
    expect(navLinks[0].nativeElement.textContent).toContain('Product');
    expect(navLinks[1].nativeElement.textContent).toContain('Features');
    expect(navLinks[2].nativeElement.textContent).toContain('Pricing');
  });

  it('should toggle mobile menu on button click', () => {
    const toggleButton = fixture.debugElement.query(By.css('button'));
    toggleButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.isMenuOpen).toBeTrue();

    let mobileMenu = fixture.debugElement.query(By.css('.mobile-menu'));
    expect(mobileMenu).toBeTruthy();

    toggleButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.isMenuOpen).toBeFalse();
    mobileMenu = fixture.debugElement.query(By.css('.mobile-menu'));
    expect(mobileMenu).toBeFalsy();
  });

  it('should display correct icon based on isMenuOpen state', () => {
    component.isMenuOpen = false;
    fixture.detectChanges();
    let menuIcon = fixture.debugElement.query(By.css('img[alt="open Menu"]'));
    expect(menuIcon).toBeTruthy();

    component.isMenuOpen = true;
    fixture.detectChanges();
    menuIcon = fixture.debugElement.query(By.css('img[alt="Close Menu"]'));
    expect(menuIcon).toBeTruthy();
  });
});
