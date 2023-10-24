[rewrite_local]
  
# ～ Bilibili大会员（2022-12-05）@ddgksf2013
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header https://raw.githubusercontent.com/FaithAluten/qx/main/bpro.js


[mitm] 

hostname=app.bilibili.com, grpc.biliapi.net,*.biliapi.net,app.bilibili.com,api.bilibili.com,api.live.bilibili.com,api.vc.bilibili.com,dataflow.biliapi.com,124.239.240.*,101.89.57.66, 218.94.210.66,240e:b1:9801:206:11:0:0:*

***********************************/

 


var modifiedHeaders = $request['headers'];
modifiedHeaders['Cookie'] = 'buvid3=20576D21-4599-406C-881F-D78229685063148820infoc; buvid4=F31FA446-077F-6665-A0F7-99C911F7002E38022-122093021-/jcg52HUDTQzRAe0Zb9aJg%3D%3D; buvid_fp=66a80a3082f883d25e94f20ff1e666fc; LIVE_BUVID=AUTO4516672161973249; b_nut=100; PVID=1; _uuid=256A2329-5A6D-A324-B762-32F12435CC6927045infoc; bili_ticket=eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTgzODk2NDQsImlhdCI6MTY5ODEzMDM4NCwicGx0IjotMX0.dZlH0qjqJcYtif4CBu7jTX8WxrYMC9UB-hqcGSfEwvI; bili_ticket_expires=1698389584; fingerprint3=79c767c82c79e3b0acffde0487e01841; Buvid=Z244B32CDC1AE24C4D2483FB724F24E6034B; DedeUserID=102293070; DedeUserID__ckMd5=30c67bd206b46b52; SESSDATA=02159e1c%2C1713509041%2Cc30d54a2CjAwS4L3rIwl5CxbzgC4XqbKVGZ4Mv4ocLFf92Ccrypfb1AztsQwAuMWrDmzNrNtW6QSVkZ0eTlhLS1WUVJIUk5ZOFEtV2hoeWpqZjFIOTJpOHlVOGlKYzlxOExrNXJfeW9FN2VFaC1uQVFwMEdrTjZRM3NjNWVQb2p3aGpPVFVoUmxTTlpCeFRnIIEC; bili_jct=a69b3c090989103ca0ec0a9a89cb08ca; sid=oh9bvxne';
modifiedHeaders['x-bili-device-bin'] = 'CAEQxN/nIxokWjI0NEIzMkNEQzFBRTI0QzREMjQ4M0ZCNzI0RjI0RTYwMzRCIgZpcGhvbmUqA2lvczIFcGhvbmU6BWFwcGxlQgVBcHBsZUoNaVBob25lIDE0IFByb1IEMTcuMWoGNy41MS4wckAyQkY0Mjk0M0FDOTY5RkFGMEM3NkJENkJEMkI0MjZCOTIwMjIwOTIwMTY1MzA3QzIyMzY3M0JDOUE4NEZBMUVEeL/9vaezLQ==';
modifiedHeaders['Authorization'] = 'identify_v1 469562f66ae3099c2a02a9cc267f20a2CjAwS4L3rIwl5CxbzgC4XqbKVGZ4Mv4ocLFf92Ccrypfb1AztsQwAuMWrDmzNrNtW6QSVkZ0eTlhLS1WUVJIUk5ZOFEtV2hoeWpqZjFIOTJpOHlVOGlKYzlxOExrNXJfeW9FN2VFaC1uQVFwMEdrTjZRM3NjNWVQb2p3aGpPVFVoUmxTTlpCeFRnIIEC';
modifiedHeaders['User-Agent'] = 'bili-universal/75100100 os/ios model/iPhone 14 Pro mobi_app/iphone osVer/17.1 network/2';
modifiedHeaders['buvid'] = 'Z244B32CDC1AE24C4D2483FB724F24E6034B';
modifiedHeaders['x-bili-metadata-bin'] = 'CtwBNDY5NTYyZjY2YWUzMDk5YzJhMDJhOWNjMjY3ZjIwYTJDakF3UzRMM3JJd2w1Q3hiemdDNFhxYktWR1o0TXY0b2NMRmY5MkNjcnlwZmIxQXp0c1F3QXVNV3JEbXpOck50VzZRU1ZrWjBlVGxoTFMxV1VWSklVazVaT0ZFdFYyaG9lV3BxWmpGSU9USnBPSGxWT0dsS1l6bHhPRXhyTlhKZmVXOUZOMlZGYUMxdVFWRndNRWRyVGpaUk0zTmpOV1ZRYjJwM2FHcFBWRlZvVW14VFRscENlRlJuSUlFQxIGaXBob25lGgVwaG9uZSDE3+cjKgVhcHBsZTIkWjI0NEIzMkNEQzFBRTI0QzREMjQ4M0ZCNzI0RjI0RTYwMzRCOgNpb3M=';
modifiedHeaders['x-bili-locale-bin'] = 'Eg4KAnpoEgRIYW5zGgJDTg==';
modifiedHeaders['x-bili-network-bin'] = 'CAE=';
modifiedHeaders['x-bili-fawkes-req-bin'] = 'CgZpcGhvbmUSBHByb2QaCDhlMGRiOWYw';
modifiedHeaders['x-bili-trace-id'] = '6abd4b484e45c2edec8e58a5d3653811:ec8e58a5d3653811:0:0';
modifiedHeaders['x-bili-exps-bin'] = '';
$done({'headers': modifiedHeaders});
