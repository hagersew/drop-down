import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { DropDownComponent } from './drop-down.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { IDropdownOption } from '@dropdown/shared/interface/IDropdown';

const TEST_ID_CURRENT_VALUE = "[test-id='test-id-currentValue']";
const TEST_ID_UL = "[test-id='test-id-ul']";
const TEST_ID_PLACE_HOLDER = "[test-id='test-id-currentValue']";
const TEST_OPTION_INDEX = 6;
const dropDownOptions: IDropdownOption[] = [
  { id: 1, name: 'Option 1' },
  { id: 2, name: 'Option 2' },
  { id: 3, name: 'Option 3' },
  { id: 4, name: 'Option 4' },
  { id: 5, name: 'Option 5' },
  { id: 6, name: 'Option 6' },
  { id: 7, name: 'Option 7' },
  { id: 8, name: 'Option 8' },
  { id: 9, name: 'Option 9' },
  { id: 10, name: 'Option 10' },
];

describe('DropDownComponent', () => {
  let component: DropDownComponent;
  let fixture: ComponentFixture<DropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropDownComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(DropDownComponent);
    component = fixture.componentInstance;
  });

  it('Should create the app', fakeAsync(() => {
    const fixture = TestBed.createComponent(DropDownComponent);
    const dropDown = fixture.debugElement.componentInstance;
    expect(dropDown).toBeTruthy();
  }));

  it('Should show placeholder', fakeAsync(() => {
    const placeholder =
      fixture.debugElement.nativeElement.querySelector(TEST_ID_PLACE_HOLDER);
    fixture.detectChanges();
    expect(component.placeholder).toBe(placeholder.innerHTML);

    component.placeholder = 'Select';
    expect(component.placeholder).toBe(placeholder.innerHTML);
  }));

  it(
    'Should match ' +
      TEST_OPTION_INDEX +
      'th item and match all ul children number',
    fakeAsync(() => {
      const optionList =
        fixture.debugElement.nativeElement.querySelector(TEST_ID_UL);

      component.options = dropDownOptions;
      component.select(dropDownOptions[TEST_OPTION_INDEX]);
      fixture.detectChanges();

      const noOfChildren = dropDownOptions.length;
      expect(optionList.children.length).toEqual(noOfChildren);
      expect(optionList.childNodes[TEST_OPTION_INDEX].innerHTML.trim()).toBe(
        dropDownOptions[TEST_OPTION_INDEX].name
      );
    })
  );

  it(
    'Should render selected option ' + TEST_OPTION_INDEX,
    fakeAsync(() => {
      const currentValue = fixture.debugElement.nativeElement.querySelector(
        TEST_ID_CURRENT_VALUE
      );

      component.select(dropDownOptions[TEST_OPTION_INDEX]);
      fixture.detectChanges();
      expect(component.currentValue.name).toBe(currentValue.innerHTML);
    })
  );
});
