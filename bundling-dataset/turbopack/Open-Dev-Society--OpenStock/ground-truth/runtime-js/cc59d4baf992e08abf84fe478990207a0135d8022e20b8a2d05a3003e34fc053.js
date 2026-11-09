
	window.initData = window.initData || {};

	window.initData.snowplowSettings = {
		collectorId: 'tv_cf',
		url: 'snowplow-pixel.tradingview.com',
		params: {
			appId: 'tradingview',
			postPath: '/com.tradingview/track',
		},
		enabled: true,
	}
