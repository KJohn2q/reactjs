<?php
namespace app\index\controller;

class Index
{
    public function index()
    {
        return '<style type="text/css">*{ padding: 0; margin: 0; } .think_default_text{ padding: 4px 48px;} a{color:#2E5CD5;cursor: pointer;text-decoration: none} a:hover{text-decoration:underline; } body{ background: #fff; font-family: "Century Gothic","Microsoft yahei"; color: #333;font-size:18px} h1{ font-size: 100px; font-weight: normal; margin-bottom: 12px; } p{ line-height: 1.6em; font-size: 42px }</style><div style="padding: 24px 48px;"> <h1>:)</h1><p> ThinkPHP V5<br/><span style="font-size:30px">十年磨一剑 - 为API开发设计的高性能框架</span></p><span style="font-size:22px;">[ V5.0 版本由 <a href="http://www.qiniu.com" target="qiniu">七牛云</a> 独家赞助发布 ]</span></div><script type="text/javascript" src="https://tajs.qq.com/stats?sId=9347272" charset="UTF-8"></script><script type="text/javascript" src="https://e.topthink.com/Public/static/client.js"></script><think id="ad_bd568ce7058a1091"></think>';
    }

    public function getNewsList() {
        $req_data = input('param.');
        $start = 0;  // 初始值
        $countSingle = !empty($req_data['count'])?$req_data['count']:20;  // 每次返回的记录条数
        $end = 0 + $countSingle;  // 第一次返回记录结束值  
        $type = $req_data['type'];
        $realPath = $this->urlRecognized($type, $start, $end);
        $findField = $this->indexField($type);
        $url = API_URL.$realPath;
        $data = get_json_data($url);

        $data = data_format($data, $findField);

        foreach ($data as $key => $value) {
            $data[$key]['id'] = $key;
        } 

        return json($data);
    }

    public function getNewsDetail() {
        $req_data = input('param.');
        $docid = $req_data['docid'];
        $url = 'http://c.m.163.com/nc/article/'.$docid.'/full.html';
        $data = get_json_data($url);

        $data = json_decode($data, true);
        $newsDetail = array();
        $newsDetail['title'] = $data[$docid]['title'];
        $newsDetail['body'] = $data[$docid]['body'];
        $newsDetail['source'] = $data[$docid]['source'];
        $newsDetail['ptime'] = $data[$docid]['ptime'];

        return json($newsDetail);
    }

    public function indexField($type) {
        $findField = ''; // 索引字段
        switch($type) {
            case 'top':
                $findField = 'BBM54PGAwangning';
                break;
            case 'entertainment':
                $findField = 'BA10TA81wangning';
                break;
            case 'sport':
                $findField = 'BA8E6OEOwangning';
                break;
            case 'finance':
                $findField = 'BA8EE5GMwangning';
                break;
            case 'military':
                $findField = 'BAI67OGGwangning';
                break;
            case 'science':
                $findField = 'BA8D4A3Rwangning';
                break;
            case 'iphone':
                $findField = 'BAI6I0O5wangning';
                break;
            case 'digital':
                $findField = 'BAI6JOD9wangning';
                break;
            case 'fashion':
                $findField = 'BA8F6ICNwangning';
                break;
            case 'game':
                $findField = 'BAI6RHDKwangning';
                break;
            case 'eduction':
                $findField = 'BA8FF5PRwangning';
                break;
            case 'health':
                $findField = 'BDC4QSV3wangning';
                break;
            case 'travel':
                $findField = 'BEO4GINLwangning';
                break;
        }

        return $findField;
    }

    public function urlRecognized($type, $start, $end) {
        $realPath = '';
        switch($type) {
            case 'top':
                $realPath = '/touch/reconstruct/article/list/BBM54PGAwangning/'.$start.'-'.$end.'.html';
                break;
            case 'entertainment':
                $realPath = '/touch/reconstruct/article/list/BA10TA81wangning/'.$start.'-'.$end.'.html';
                break;
            case 'sport':
                $realPath = '/touch/reconstruct/article/list/BA8E6OEOwangning/'.$start.'-'.$end.'.html';
                break;
            case 'finance':
                $realPath = '/touch/reconstruct/article/list/BA8EE5GMwangning/'.$start.'-'.$end.'.html';
                break;
            case 'military':
                $realPath = '/touch/reconstruct/article/list/BAI67OGGwangning/'.$start.'-'.$end.'.html';
                break;
            case 'science':
                $realPath = '/touch/reconstruct/article/list/BA8D4A3Rwangning/'.$start.'-'.$end.'.html';
                break;
            case 'iphone':
                $realPath = '/touch/reconstruct/article/list/BAI6I0O5wangning/'.$start.'-'.$end.'.html';
                break;
            case 'digital':
                $realPath = '/touch/reconstruct/article/list/BAI6JOD9wangning/'.$start.'-'.$end.'.html';
                break;
            case 'fashion':
                $realPath = '/touch/reconstruct/article/list/BA8F6ICNwangning/'.$start.'-'.$end.'.html';
                break;
            case 'game':
                $realPath = '/touch/reconstruct/article/list/BAI6RHDKwangning/'.$start.'-'.$end.'.html';
                break;
            case 'eduction':
                $realPath = '/touch/reconstruct/article/list/BA8FF5PRwangning/'.$start.'-'.$end.'.html';
                break;
            case 'health':
                $realPath = '/touch/reconstruct/article/list/BDC4QSV3wangning/'.$start.'-'.$end.'.html';
                break;
            case 'travel':
                $realPath = '/touch/reconstruct/article/list/BEO4GINLwangning/'.$start.'-'.$end.'.html';
                break;
        }
        return $realPath;
    }
}
