<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/html/head.jsp" %>
<script language="javascript" src="${CONFIG.res_url}script/uc/user/department.js" ></script> 


</HEAD>
<BODY>
<div class="clear" id="pici_tab">
  <ul> 
    <span class="rf"><a target="_blank" href="${manageUrl}-add"><input type="button" value="新增" name="" id="" class="blue"></a></span>   
  	<li class="menu_on"><s class="rc-l"></s><s class="rc-r"></s><a href="#">列表</a></li>
  </ul>
</div>

<table class="listtable" width="98%">
	<thead>
		
		<th>id</th>
		
		<th>树形结点父id</th>
		
		<th>部门名称</th>
		
		<th>直接上级ID</th>
		
		<th>是否删除标识</th>
		
		<th>深度</th>
		
		<th>树形结点id</th>
		
		<th>操作</th>
	</thead>
	<tbody>
		<c:forEach items="${request.dataList}" var="v"  varStatus="st"> 
		<tr>
			
			<td>${v.id}</td> 
			
			<td>${v.treeFatherId}</td> 
			
			<td>${v.depName}</td> 
			
			<td>${v.fatherId}</td> 
			
			<td>${v.delFlag}</td> 
			
			<td>${v.depth}</td> 
			
			<td>${v.treeId}</td> 
			
			<td>
				<a href="${manageUrl}-edit?id=${v.id}">编辑</a>  
				<a href="${manageUrl}-doDel?id=${v.id}" onclick="return confirm('本操作不可恢复,确认删除?')">删除</a> 
			</td>
		</tr>
		</c:forEach>
	</tbody>
</table>
<%@include file="/WEB-INF/html/pager.jsp" %>
<%@include file="/WEB-INF/html/foot.jsp" %>
