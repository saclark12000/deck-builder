import { TestBed } from '@angular/core/testing';

import { DeckActionsService } from './deck-actions.service';

describe('DeckActionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeckActionsService = TestBed.get(DeckActionsService);
    expect(service).toBeTruthy();
  });
});
