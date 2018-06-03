import { TestBed, inject } from '@angular/core/testing';

import { XmlProcessorServiceService } from './xml-processor-service.service';

describe('XmlProcessorServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XmlProcessorServiceService]
    });
  });

  it('should be created', inject([XmlProcessorServiceService], (service: XmlProcessorServiceService) => {
    expect(service).toBeTruthy();
  }));
});
