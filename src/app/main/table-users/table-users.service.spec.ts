import { TestBed } from '@angular/core/testing';

import { TableUsersService } from './table-users.service';

describe('TableUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TableUsersService = TestBed.get(TableUsersService);
    expect(service).toBeTruthy();
  });
});
