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

export const WeatherIcon = ({ iconRef }) => {
	if (iconRef === '01d' || iconRef === '01n') {
		return <SunnyIcon />
	}

	if (iconRef === '02d' || iconRef === '02n') {
		return <PartiallyCloudyIcon />
	}

	if (iconRef === '03d' || iconRef === '03n') {
		return <ScatteredCloudsIcon />
	}

	if (iconRef === '04d' || iconRef === '04n') {
		return <BrokenCloudsIcon />
	}

	if (iconRef === '09d' || iconRef === '09n') {
		return <RainShowersIcon />
	}

	if (iconRef === '10d' || iconRef === '10n') {
		return <RainIcon />
	}

	if (iconRef === '11d' || iconRef === '11n') {
		return <ThunderstormIcon />
	}

	if (iconRef === '13d' || iconRef === '13n') {
		return <SnowIcon />
	}

	if (iconRef === '50d' || iconRef === '50n') {
		return <MistIcon />
	}

	return null
}
