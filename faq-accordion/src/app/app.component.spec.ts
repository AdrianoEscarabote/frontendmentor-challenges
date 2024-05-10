import { TestBed } from '@angular/core/testing';
import { FaqButtonComponent } from './components/faqButton/faqButton.component';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'faq-accordion' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('faq-accordion');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'FAQ accordion'
    );
  });

  it('should create the faq-button-component', () => {
    const fixture = TestBed.createComponent(FaqButtonComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should display the question correctly', () => {
    const fixture = TestBed.createComponent(FaqButtonComponent);
    const component = fixture.componentInstance;
    component.question = 'Test question';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain(
      'Test question'
    );
  });
});
