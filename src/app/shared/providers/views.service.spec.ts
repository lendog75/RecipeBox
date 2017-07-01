import { TestBed, inject } from '@angular/core/testing';

import { ViewsService } from './views.service';

describe('ViewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewsService]
    });
  });

  it('should ...', inject([ViewsService], (service: ViewsService) => {
    expect(service).toBeTruthy();
  }));
});
