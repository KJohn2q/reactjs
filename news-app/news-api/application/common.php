<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006-2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 流年 <liu21st@gmail.com>
// +----------------------------------------------------------------------

// 应用公共文件
/**
 * post 发送JSON格式数据
 * @Author   wq
 * @DateTime 2019-09-29
 * @param    [type]     $url         [description]
 * @param    [type]     $data_string [description]
 * @return   [type]                  [description]
 */
function post_json_data($url, $data_string) {
    //初始化
    $ch = curl_init();
    //设置post方式提交
    curl_setopt($ch, CURLOPT_POST, 1);
    //设置抓取的url
    curl_setopt($ch, CURLOPT_URL, $url);
    //设置post数据
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
    //设置头文件的信息作为数据流输出
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type: application/json; charset=utf-8',
            'Content-Length: ' . strlen($data_string))
    );
    ob_start();
     //执行命令
    curl_exec($ch);
    $return_content = ob_get_contents();
    ob_end_clean();
    $return_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    return array('code'=>$return_code, 'result'=>$return_content);
}

/**
 * get请求数据
 * @Author   wq
 * @DateTime 2019-09-29
 * @param    [type]     $url [description]
 * @return   [type]          [description]
 */
function get_json_data($url) {
    $curl = curl_init();

    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_TIMEOUT,60);

    $output = curl_exec($curl);
    curl_close($curl);
    return $output;
}

/**
 * 格式化输出
 * @Author   wq
 * @DateTime 2019-09-29
 * @param    [type]     $arr [description]
 * @return   [type]          [description]
 */
function p($arr)
{
    echo '<pre>';
    echo print_r($arr);
    echo '</pre>';
}

/**
 * 接口返回数据格式化
 * @param $data
 * @return mixed
 */
function data_format($data, $findField) {
    $data = substr($data, 9, strlen($data)-10);
    $data = json_decode($data,true);
    return $data[$findField];
}

