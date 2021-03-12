import React from 'react'
import {
	BrokenCloudsIcon,
	MistIcon,
	PartiallyCloudyIcon,
	RainIcon,
	RainShowersIcon,
	ScatteredCloudsIcon,
	SnowIcon,
	SunnyIcon,
	ThunderstormIcon,
} from './icons'

export const WeatherIcon = ({ iconReference }) => {
	if (iconReference === '01d' || iconReference === '01n') {
		return <SunnyIcon />
	}

	if (iconReference === '02d' || iconReference === '02n') {
		return <PartiallyCloudyIcon />
	}

	if (iconReference === '03d' || iconReference === '03n') {
		return <ScatteredCloudsIcon />
	}

	if (iconReference === '04d' || iconReference === '04n') {
		return <BrokenCloudsIcon />
	}

	if (iconReference === '09d' || iconReference === '09n') {
		return <RainShowersIcon />
	}

	if (iconReference === '10d' || iconReference === '10n') {
		return <RainIcon />
	}

	if (iconReference === '11d' || iconReference === '11n') {
		return <ThunderstormIcon />
	}

	if (iconReference === '13d' || iconReference === '13n') {
		return <SnowIcon />
	}

	if (iconReference === '50d' || iconReference === '50n') {
		return <MistIcon />
	}

	return null
}
