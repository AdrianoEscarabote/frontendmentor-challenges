import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToggleSwitchComponent } from './toggleSwitch.component';
import { By } from '@angular/platform-browser';

describe('ToggleSwitchComponent', () => {
  let component: ToggleSwitchComponent;
  let fixture: ComponentFixture<ToggleSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleSwitchComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the toggle label', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const labelElement = compiled.querySelector('span')?.textContent;

    expect(labelElement).toContain('Dark Mode');
  });

  it('should toggle theme when checkbox is clicked', () => {
    spyOn(component, 'toggleTheme');

    const checkbox = fixture.debugElement.query(
      By.css('input[type="checkbox"]')
    ).nativeElement;
    checkbox.click();

    expect(component.toggleTheme).toHaveBeenCalled();
  });
});
