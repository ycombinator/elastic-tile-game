var data = {
	"Elasticsearch": [
		{ value: 200, answers: [
			"A collection of similar documents",
			"Search library used internally by Elasticsearch",
			"9200",
			"9300",
			"The two types of shards"
			]
		},
		{ value: 400, answers: [
		  "Part of an index",
			"Default number of shards for an index",
			"All primary shards active but not all replica shards active"
			]
		},
		{ value: 600, answers: [
			"API that allows multiple operations to be performed at once",
			"Reverse search",
			"Latest released version of Elasticsearch",
			"Inter-node communication protocol"
			]
		},
		{ value: 1000, answers: [
			"ceil( num_replica_shards / 2 ) + 1",
			"Finite State Transducer (FST)"
			]
		}
	],
	"Logstash": [
		{ value: 200, answers: [
			"Filter plugin to parse text using regular expression patterns",
			"Input, Filter, Output, and Codec"
			]
		},
		{ value: 400, answers: [
			"Programming language in which Logstash is written"
			]
		},
		{ value: 600, answers: [
		  "Protocol used by Logstash Forwarder"
			]
		},
		{ value: 1000, answers: "Type of plugin that can change the representation of an event" }
	],
	"Kibana": [
		{ value: 200, answers: [
			"Command to start the Kibana server on UNIX-like systems",
			"Feature to automatically update the data shown in Kibana"
			]
		},
		{ value: 400, answers: "The default time span in the Discover view" },
		{ value: 600, answers: [
			"Special Elasticsearch index where Kibana stores its data",
			"The expression language used for searching",
			"Allows custom formatting of fields"
			]
		},
		{ value: 1000, answers: [
			"Programming language in which the first version of Kibana was written",
			"Library used by the number formatting template"
			]
		}
	],
	"Beats": [
		{ value: 200, answers: [
      "Provides realtime analytics for network protocols",
      "Programming language in which Packetbeat is written"
      ]
    },
		{ value: 400, answers: [
      "Platform for building more beats",
      "Beat based on Logstash Forwarder",
      "Beat that tracks CPU and memory statistics per process"
      ]
    },
		{ value: 600, answers: [
      "Configuration file format used by Packetbeat",
      "Packetbeat stores the HTTP status code in this field"
      ]
    },
		{ value: 1000, answers: [
      "First database protocol supported by Packetbeat",
      "Go library used by Packetbeat to sniff packets"
      ]
    }
	],
	"Commercial": [
		{ value: 200, answers: [
			"Password protection for Elasticsearch",
			"Elasticsearch as a service"
			]
		},
		{ value: 400, answers: [
			"Development, Silver, Gold, and Platinum",
			"Free trial period for Found"
			]
		},
		{ value: 600, answers: [
			"Alerting for Elasticsearch",
			"Starting rate for a Found cluster"
			]
		},
		{ value: 1000, answers: "Subscription level not offering phone support" }
	]
}
