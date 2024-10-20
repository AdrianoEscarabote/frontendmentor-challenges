import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverviewCardComponent } from './overviewCard.component';
import { By } from '@angular/platform-browser';

describe('OverviewCardComponent', () => {
  let component: OverviewCardComponent;
  let fixture: ComponentFixture<OverviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewCardComponent);
    component = fixture.componentInstance;
    component.title = 'Page Views';
    component.views = '87';
    component.percentage = 3;
    component.socialType = 'facebook';
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display title and views', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const titleElement = compiled.querySelector('p')?.textContent;
    const viewsElement = compiled.querySelector('span')?.textContent;

    expect(titleElement).toContain('Page Views');
    expect(viewsElement).toBe('87');
  });

  it('should render the correct social icon', () => {
    spyOn(component, 'getSocialIcon').and.returnValue('facebook-icon.svg');
    fixture.detectChanges();

    const iconElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(iconElement.src).toContain('facebook-icon.svg');
  });

  it('should apply correct class based on percentage', () => {
    component.percentage = 3;
    fixture.detectChanges();

    const percentageElement = fixture.debugElement.query(By.css('p.text-xs'));
    expect(percentageElement.classes['text-limeGreen']).toBeTrue();

    component.percentage = -2;
    fixture.detectChanges();

    expect(percentageElement.classes['text-brightRed']).toBeTrue();
  });
});
