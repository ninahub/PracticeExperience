<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/jsp/common/prefix.jsp" %>
<html>
<head>

</head>
<body>
<table class="datatable" >
<tr>
<th align="right" width="150" height="30">处罚单号：</th>
<td>
  ${punishBill.id}
</td>
<th align="right" width="150" height="30">质检单号：</th>
<td>
 ${punishBill.qcId}
</td>
</tr>
<tr>
<th align="right" width="150" height="30">投诉单号：</th>
<td>
  ${punishBill.cmpId}
</td>
<th align="right" width="150" height="30">订单号：</th>
<td>
 ${punishBill.ordId}
</td>
</tr>
<tr>
<th align="right" width="150" height="30">产品编号：</th>
<td>
  ${punishBill.prdId}
</td>
<th align="right" width="150" height="30">JIRA单号：</th>
<td>
 ${punishBill.jiraNum}
</td>
</tr>
<tr>
<th align="right" width="150" height="30">供应商编号：</th>
<td>
  ${punishBill.agencyId}
</td>
<th align="right" width="150" height="30">供应商名称：</th>
<td>
 ${punishBill.agencyName}
</td>
</tr>
<tr>
<th align="right" width="150" height="30">记分处罚：</th>
<td>
  ${punishBill.scorePunish}
</td>
<th align="right" width="150" height="30">经济处罚：</th>
<td>
 ${punishBill.economicPunish}
</td>
</tr>
<tr>
<th align="right" width="150" height="30">添加人：</th>
<td>
  ${punishBill.addPerson}
</td>
<th align="right" width="150" height="30">添加时间：</th>
<td>
 <fmt:formatDate value="${punishBill.addTime}" pattern="yyyy-MM-dd HH:mm:ss"/>
</td>
</tr>
<tr>
		<th align="right" width="150" height="30">质检类型：</th>
	<td colspan="3">
		  ${punishBill.qcTypeName}
		</td>
		
</tr>
<tr>
</table>
<table  class="listtable" >
	<tr>
	    <th>外部处罚单编号</th>
		<th>处罚依据编号</th>
		<th>处罚等级</th>
		<th>分级标准描述</th>
		<th>经济处罚</th>
		<th>记分处罚</th>
		<th>执行标记</th>
</tr>
	<c:forEach items="${basisList}" var="list" > 
	<c:if test="${list.execFlag ==1}">
		<tr align="center" style="color: red">
			<td>${list.opbId}</td>
			<td>${list.psId}</td>
			<td>${list.punishStandard.level}</td>
			<td title="${list.punishStandard.description}">${list.punishStandard.description}</td>
			<td>${list.punishStandard.economicPunish}</td>
			<td>${list.punishStandard.scorePunish}</td>
			<td>执行</td>
		</tr>
	</c:if>
	<c:if test="${list.execFlag ==0}">
		<tr align="center">
			<td>${list.opbId}</td>
			<td>${list.psId}</td>
			<td>${list.punishStandard.level}</td>
			<td title="${list.punishStandard.description}">${list.punishStandard.description}</td>
			<td>${list.punishStandard.economicPunish}</td>
			<td>${list.punishStandard.scorePunish}</td>
			<td>未执行</td>
		</tr>
	</c:if>
	</c:forEach>
</table>
</body>
</html>