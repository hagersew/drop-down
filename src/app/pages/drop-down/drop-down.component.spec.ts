import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DropDownComponent } from './drop-down.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [DropDownComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DropDownComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'drop-down'`, () => {
    const fixture = TestBed.createComponent(DropDownComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('drop-down');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(DropDownComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'drop-down app is running!'
    );
  });
});
