import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Mascota } from '../../interfaces/mascota';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

const listMascotas: Mascota[] = [
  { nombre: 'Sargus', edad: 3, raza: 'Pitbull', color: 'Barsino', peso: 20 },
  { nombre: 'Motas', edad: 6, raza: 'Coker', color: 'Negro', peso: 30 },
  { nombre: 'Maya', edad: 8, raza: 'Golden', color: 'Blanco', peso: 40 },
  { nombre: 'Lotus', edad: 2, raza: 'Doverman', color: 'Barsino', peso: 60 },
  { nombre: 'Venus', edad: 10, raza: 'Chihuahua', color: 'Blanco', peso: 10 },
  { nombre: 'Max', edad: 7, raza: 'Labrador', color: 'Negro', peso: 22 },
  { nombre: 'Virgil', edad: 6, raza: 'Pastor Alemán', color: 'Blanco', peso: 66 },
  { nombre: 'Saturno', edad: 4, raza: 'Callejero', color: 'Barsino', peso: 70 }
];

@Component({
  selector: 'app-listado-mascotas',
  templateUrl: './listado-mascotas.component.html',
  styleUrl: './listado-mascotas.component.css'
})
export class ListadoMascotasComponent implements OnInit, AfterViewInit  {
  
  displayedColumns: string[] = ['nombre', 'edad', 'raza', 'color', 'peso'];
  dataSource = new MatTableDataSource<Mascota>(listMascotas); 

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Items por página';
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
  }
}
