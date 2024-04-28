import { Component, OnInit } from '@angular/core';
import { Coffee } from '../coffee';
import { CoffeeService } from '../coffee.service';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  coffees: Array<Coffee> = [];
  totalCafeOrigen: number = 0;
  totalCafeBlend: number = 0;

  constructor(private coffeeService: CoffeeService) { }

  getCoffees(): void {
    this.coffeeService.getCoffees().subscribe((coffees) => {
      this.coffees = coffees;
      this.totalCafeOrigen = this.coffees.filter(coffee => coffee.tipo === 'Café de Origen').length;
      this.totalCafeBlend = this.coffees.filter(coffee => coffee.tipo === 'Blend').length;
    });
  }

  ngOnInit() {
    this.getCoffees();
  }

}