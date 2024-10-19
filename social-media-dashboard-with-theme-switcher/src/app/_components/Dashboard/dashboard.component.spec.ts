import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { StatsCardComponent } from '../StatsCard/statsCard.component';
import { OverviewCardComponent } from '../OverviewCard/overviewCard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent, StatsCardComponent, OverviewCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the main component', () => {
    expect(component).toBeTruthy();
  });

  it('should render four statsCard components', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const statsCards = compiled.querySelectorAll('statsCard-component');
    expect(statsCards.length).toBe(4);
  });

  it('should render eight overviewCard components', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const overviewCards = compiled.querySelectorAll('overviewCard-component');
    expect(overviewCards.length).toBe(8);
  });

  it('should pass correct inputs to first statsCard component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const statsCard = compiled.querySelector(
      'statsCard-component'
    ) as HTMLElement;
    expect(statsCard.getAttribute('username')).toBe('@nathanf');
    expect(statsCard.getAttribute('number')).toBe('1987');
    expect(statsCard.getAttribute('followersLabel')).toBe('Followers');
    expect(statsCard.getAttribute('socialType')).toBe('facebook');
  });

  it('should pass correct inputs to first overviewCard component', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const overviewCard = compiled.querySelector(
      'overviewCard-component'
    ) as HTMLElement;
    expect(overviewCard.getAttribute('title')).toBe('Page Views');
    expect(overviewCard.getAttribute('views')).toBe('87');
    expect(overviewCard.getAttribute('socialType')).toBe('facebook');
  });
});
