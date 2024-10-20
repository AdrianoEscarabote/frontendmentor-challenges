import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatsCardComponent } from './statsCard.component';
import { By } from '@angular/platform-browser';

describe('StatsCardComponent', () => {
  let component: StatsCardComponent;
  let fixture: ComponentFixture<StatsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsCardComponent);
    component = fixture.componentInstance;
    component.username = 'User123';
    component.number = '1500';
    component.followersLabel = 'Followers';
    component.socialType = 'instagram';
    component.changeToday = 5;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display username and followers count', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const usernameElement = compiled.querySelector(
      'p.text-color-secondary'
    )?.textContent;
    const followersCountElement =
      compiled.querySelector('#followers')?.textContent;

    expect(usernameElement).toContain('User123');
    expect(followersCountElement).toContain('1500');
  });

  it('should render the correct social icon based on socialType', () => {
    spyOn(component, 'getSocialIcon').and.returnValue('instagram-icon.svg');
    fixture.detectChanges();

    const iconElement = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(iconElement.src).toContain('instagram-icon.svg');
  });

  it('should show the Instagram border when socialType is Instagram', () => {
    const instagramBorder = fixture.debugElement.query(
      By.css('.instagram-border')
    );
    expect(instagramBorder).toBeTruthy();

    component.socialType = 'facebook';
    fixture.detectChanges();

    const noInstagramBorder = fixture.debugElement.query(
      By.css('.instagram-border')
    );
    expect(noInstagramBorder).toBeFalsy();
  });
});
