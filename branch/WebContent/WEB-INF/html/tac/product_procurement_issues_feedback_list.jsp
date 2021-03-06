<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/html/head.jsp" %>
<%@taglib uri="/struts-tags" prefix="s" %>
<script type="text/javascript" src="${CONFIG.res_url}script/thickbox-compressed.js"></script>
<script type="text/javascript" src="${CONFIG.res_url}script/jquery/validation/jquery.validate.min.js"></script>
<link href="${CONFIG.res_url}css/thickbox.css" rel="stylesheet" type="text/css" />
<link href="${CONFIG.res_url}css/easydialog.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="${CONFIG.res_url}/script/easydialog.min.js"></script>
<style type="text/css">
	.listtable td{
		text-align:center
	}
	
	.main{
		margin:0 auto;
		width:100%
	}
</style>
<script type="text/javascript">
	var modelName='产品采购问题日反馈';
	var mainUrl = 'prdProcurementIssuesFeedback';
</script>

</head>
<body>
<div class="top_crumbs">您当前所在的位置：投诉质检管理>><span class="top_crumbs_txt">产品采购问题日反馈列表</span></div>
<div  class="main">
<form name="form" id="search_form" method="post" enctype="multipart/form-data" action="prdProcurementIssuesFeedback">
    <div class="pici_search pd5 mb10">
        <label class="mr10">组别：
        	<s:textfield name="searchVo.department"></s:textfield>
        </label>
        <label class="mr10">区域：
        	<s:textfield  name="searchVo.area"></s:textfield>
        </label>
        <label class="mr10">发起时间：
            <input id="addTimeBgn" type="text"  class="Wdate"  name="searchVo.addTimeBgn" value="${searchVo.addTimeBgn}" onfocus="WdatePicker({dateFmt:'yyyy-MM-dd',maxDate:'#F{$dp.$D(\'addTimeEnd\')}',readOnly:true})"/>
            至
            <input id="addTimeEnd" type="text"  Class="Wdate" name="searchVo.addTimeEnd" value="${searchVo.addTimeEnd}" onclick="WdatePicker({dateFmt:'yyyy-MM-dd',minDate:'#F{$dp.$D(\'addTimeBgn\')}',readOnly:true})"/>
        </label>
        <label class="mr10">客服：
        	<s:textfield  name="searchVo.addPerson"></s:textfield>
        </label>
        <label class="mr10">
            <input type="submit" size="10"   class="blue" value="查询"/>
        </label>
        <label class="mr10" style="text-align:right">
            <input type="button" size="10"  value="新增"  class="blue" onclick="toAddOrUpdate(modelName,mainUrl)"/>
        </label>
        <label class="mr10" style="text-align:right">
            <input id="exportsButton" type="button" size="10"  value="导出"  class="blue" onclick="exports(mainUrl)"/>
        </label>
    </div>
<table width="100%" class="listtable mb10">
    <tr>
        <th>编号</th>
        <th>添加日期</th>
        <th>组别</th>
        <th>客服</th>
        <th>（预定）区域</th>
        <th>目的地类型</th>
        <th>订单号</th>
        <th>出发日期</th>
        <th>线路编号</th>
        <th>问题类型</th>
        <th>采购/产品专员</th>
        <th>采购/产品经理</th>
        <th>产品经理部门</th>
        <th>采购/产品总监（分总）</th>
        <th>供应商</th>
        <th>问题描述</th>
        <th>是否解决</th>
        <th>操作</th>
        
    </tr>
    <c:forEach items="${dataList}" var="v">
        <tr>
            <td>${v.id}</td>
            <td>
                <fmt:formatDate value= "${v.addTime}" pattern ="yyyy-MM-dd"/>
           </td>
            <td>${v.department}</td>
            <td>${v.addPerson}</td>
            <td>${v.area}</td>
            <td>${v.destType}</td>
            <td>${v.orderId}</td>
            <td>
                <fmt:formatDate value= "${v.departDate}" pattern ="yyyy-MM-dd"/>
            </td>
            <td>${v.routeId}</td>
            <td>${v.issueType}</td>
            <td>${v.prdOfficer}</td>
            <td>${v.prdManager}</td>
            <td>${v.prdManagerDep}</td>
            <td>${v.prdMajordomo}</td>
            <td>${v.supplier}</td>
            <td class="shorten30">${v.description}</td>
            <td>
                <c:if test="${v.resolveState==0 }">
                   否
                </c:if>
                <c:if test="${v.resolveState==1 }">
                   是
                </c:if>
            </td>
            <td>
                <input type="button" class="blue"  value="编辑"  onclick="toAddOrUpdate(modelName,mainUrl,${v.id})"></input>
            </td>
        </tr>
    </c:forEach>

</table>
<%@include file="/WEB-INF/html/common/pager.jsp" %>
</form>
</div>

</body>
</html>