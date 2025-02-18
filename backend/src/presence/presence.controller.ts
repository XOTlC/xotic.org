import { Controller, Get } from '@nestjs/common';
import { PresenceService } from './presence.service';
import { seconds, Throttle } from '@nestjs/throttler';

@Controller('presence')
export class PresenceController {
	constructor(private readonly presenceService: PresenceService) { }

	@Get('spotify')
	@Throttle({ default: { limit: 1, ttl: seconds(1) } })
	async getSpotifyListening() {
		return await this.presenceService.getSpotifyListening();
	}
}
