package com.tuniu.qms.qc.service;

import java.util.List;

import com.tuniu.qms.common.model.User;
import com.tuniu.qms.common.service.base.BaseService;
import com.tuniu.qms.qc.dto.QcBillDto;
import com.tuniu.qms.qc.model.QcBill;
import com.tuniu.qms.qc.model.QcInfluenceSystem;
import com.tuniu.qms.qc.model.ResDevExportBill;

public interface ResDevQcBillService  extends BaseService<QcBill, QcBillDto> {

   int getQcBillIsExist(Integer qcId);
	/**
	 * 撤销质检单
	 * @param qcBill
	 */
	void deleteDevBill(QcBill qcBill);
	
    void deleteInner(Integer qcId);
    /**
     * 删除影响系统 
     * @param Id
     */
    void deleteSystem(Integer id);
    /**
     * 添加影响系统
     * @param qcInfo
     */
    void addSystem(QcInfluenceSystem qcInfo);
    
    void addRelationDev(QcBill qcBill);
    
	void updateQcReportEmail(QcBill qcBill, User user, String reEmails,
			String ccEmails, String subject);
	
	void loadQueryPage(QcBillDto dto);
	
	List<QcBill> queryList(QcBillDto dto);
	
	/**
	 * 研发质检导出
	 * @param dto
	 * @return
	 */
	List<ResDevExportBill> exportList(QcBillDto dto);
	
	Integer exportCount(QcBillDto dto);
	
	int getInfluenceSystemCount(Integer qcId);
	
	List<QcBill> getQcPeriodList();
	/**
	 * 根据研发质检单号找到关联对应的投诉单号
	 * @param qcId
	 * @return
	 */
	List<Integer> getComplainIdByDevId(Integer qcId);
}
