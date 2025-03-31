import { TestBed } from '@angular/core/testing';

import { EmpleadoServiceTsService } from './empleado.service.ts.service';

describe('EmpleadoServiceTsService', () => {
  let service: EmpleadoServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadoServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
