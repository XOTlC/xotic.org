import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

@Injectable()
export class PresenceService {
	constructor(private readonly configService: ConfigService) { }

	async getSpotifyListening() {
		const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this.configService.get<string>('SPOTIFY_TOKEN')}`
			}
		});

		return response.data;
	};
}
