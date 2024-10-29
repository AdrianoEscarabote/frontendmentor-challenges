import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MainDashboard } from './mainDashboard.component';

describe('MainDashboard', () => {
  let component: MainDashboard;
  let fixture: ComponentFixture<MainDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainDashboard],
    }).compileComponents();

    fixture = TestBed.createComponent(MainDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render "New" tag and dashboard title', () => {
    const newTag = fixture.debugElement.query(By.css('span.text-white'));
    const dashboardTitle = fixture.debugElement.query(
      By.css('span.font-barlow')
    );

    expect(newTag.nativeElement.textContent).toContain('New');
    expect(dashboardTitle.nativeElement.textContent).toContain(
      'Monograph Dashboard'
    );
  });

  it('should display main heading text', () => {
    const mainHeading = fixture.debugElement.query(By.css('h1'));

    expect(mainHeading.nativeElement.textContent).toContain(
      'Powerful insights into your team'
    );
  });

  it('should render description text', () => {
    const description = fixture.debugElement.query(By.css('p.text-lg'));

    expect(description.nativeElement.textContent).toContain(
      'Project planning and time tracking for agile teams'
    );
  });

  it('should render button and preview text', () => {
    const button = fixture.debugElement.query(By.css('button'));
    const previewText = fixture.debugElement.query(
      By.css('span.text-neutral-grayish-blue')
    );

    expect(button.nativeElement.textContent).toContain('Schedule a demo');
    expect(previewText.nativeElement.textContent).toContain('to see a preview');
  });

  it('should render illustration image', () => {
    const image = fixture.debugElement.query(By.css('img'));

    expect(image).toBeTruthy();
    expect(image.nativeElement.getAttribute('src')).toContain(
      '/images/illustration-devices.svg'
    );
  });
});
