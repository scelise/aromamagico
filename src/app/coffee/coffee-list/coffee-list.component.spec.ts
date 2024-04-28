/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { faker } from '@faker-js/faker';

import { CoffeeListComponent } from './coffee-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('CoffeeListComponent', () => {
  
  let component: CoffeeListComponent;
  let fixture: ComponentFixture<CoffeeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [CoffeeListComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display table with header and rows', () => {

    component.coffees = Array.from({ length: 3 }, (_, index) => ({
      id: index + 1,
      nombre: faker.lorem.sentence(),
      tipo: faker.lorem.sentence(),
      region: faker.lorem.sentence(),
      sabor: faker.lorem.sentence(),
      altura: faker.number.int(),
      imagen: faker.lorem.sentence()
    }));

    fixture.detectChanges();

    const headerRow = fixture.nativeElement.querySelector('.table thead tr');

    expect(headerRow).toBeTruthy();

    const dataRows = fixture.nativeElement.querySelectorAll('.table tbody tr');

    expect(dataRows.length).toBe(3);

    dataRows.forEach((row: HTMLElement) => {
      const cells = row.querySelectorAll('td');
      expect(cells.length).toBe(4);
    });

  });

});
