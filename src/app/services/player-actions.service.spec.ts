import { TestBed } from '@angular/core/testing';

import { PlayerActionsService } from './player-actions.service';

describe('PlayerActionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerActionsService = TestBed.get(PlayerActionsService);
    expect(service).toBeTruthy();
  });
});
