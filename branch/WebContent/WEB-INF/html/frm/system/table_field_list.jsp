<%@page import="java.util.HashMap"%>
<h2>字段管理</h2>
<form class="mb10 clear" method="POST" id="search_form" action="${manageUrl}"> 
<form method="POST" action="${manageUrl}-doEdit"> 
<input type="hidden" name="refer_to" value="" />
<input type="hidden" name="table_id" value="${table_id}" />   
	<table class="listtable">
		<thead>
		</thead>
		<tbody>
		</tbody>
	</table>
</form>