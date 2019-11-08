---
layout: default
title: Monitoring
description: A description of the Mdoq monitoring
section: instance
priority: 30
---

# {{ page.title }}

Example nginx log format
```
log_format mdoq 
    'server_name="$server_name" host="$host" server_port="$server_port" '
    'server_addr="$server_addr" remote_addr="$remote_addr" realip_remote_addr="$realip_remote_addr" '
    'remote_user="$remote_user" time_local="$time_local" server_protocol="$server_protocol" '
    'status="$status" body_bytes_sent="$body_bytes_sent" upstream_response_length="$upstream_response_length" '
    'http_referer="$http_referer" http_user_agent="$http_user_agent" nginx_version="$nginx_version" '
    'http_x_forwarded_for="$http_x_forwarded_for" http_x_header="$http_x_header" uri_query="$query_string" '
    'uri="$uri" request_method="$request_method" upstream_response_time="$upstream_response_time" '
    'http_cookie="$http_cookie" request_time="$request_time" ';
```

Example log rotate
```
/path/to/web/root/mdoq/web_logs/*.log {
    daily
    rotate 7
    compress
    copytruncate
    dateext
    delaycompress
    notifempty
    maxage 7
    nomail
}
```