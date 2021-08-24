import { TestBed } from '@angular/core/testing';

import { WhoamiServiceService } from './whoami-service.service';

describe('WhoamiServiceService', () => {
  let service: WhoamiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WhoamiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
