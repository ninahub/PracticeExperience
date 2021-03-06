package com.tuniu.gt.frm.service.system.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.tuniu.gt.complaint.entity.ComplaintEntity;
import com.tuniu.gt.frm.entity.UserEntity;
import com.tuniu.gt.frm.service.system.IEmailService;
import com.tuniu.gt.frm.service.system.IUserService;
import com.tuniu.operation.platform.hogwarts.util.StringUtil;

@Service
public class DeptMgrEmailService implements IEmailService {

	@Autowired
	@Qualifier("frm_service_system_impl-user")
    private IUserService userService;
	
	
	@Override
	public List<String> getReceiverEmails(ComplaintEntity entity) {
		List<UserEntity> recipients = new ArrayList<UserEntity>();
		if (StringUtil.isNotEmpty(entity.getDepManager())) {
			recipients = userService.getUsers("realNames", "'" + entity.getDepManager() + "'");
		}
		
		List<String> emails = new ArrayList<String>();
		for (UserEntity userEntity : recipients) {
			emails.add(userEntity.getEmail());
		}
		
		return emails;
	}

}
