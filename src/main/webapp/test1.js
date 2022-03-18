/**
 * Project name(项目名称)：JS_Location
 * File name(文件名): test1
 * Author(作者）: mao
 * Author QQ：1296193245
 * GitHub：https://github.com/maomao124/
 * Date(创建日期)： 2022/3/18
 * Time(创建时间)： 21:31
 * Version(版本): 1.0
 * Description(描述)： 无
 */

// location 对象中的属性
//
// 属性   	描述
// hash	返回一个 URL 中锚的部分
//     host	返回一个 URL 的主机名和端口号
//     hostname	返回一个 URL 的主机名
//     href	返回一个完整的 URL
//     pathname	返回一个 URL 中的路径部分，开头有个/。
// port	返回一个 URL 中的端口号，如果 URL 中不包含明确的端口号，则返回一个空字符串' '。
// protocol	返回一个 URL 协议，即 URL 中冒号:及其之前的部分，例如 http: 和 https:。
// search	返回一个 URL 中的查询部分，即 URL 中?及其之后的一系列查询参数。

var url = window.location;
document.write( url+ "<br>");
document.write("<br>");

document.write("<b>hash：</b>" + url.hash + "<br>");
document.write("<b>host：</b>" + url.host + "<br>");
document.write("<b>hostname：</b>" + url.hostname + "<br>");
document.write("<b>href：</b>" + url.href + "<br>");
document.write("<b>pathname：</b>" + url.pathname + "<br>");
document.write("<b>port：</b>" + url.port + "<br>");
document.write("<b>protocol：</b>" + url.protocol + "<br>");
document.write("<b>search：</b>" + url.search + "<br>");