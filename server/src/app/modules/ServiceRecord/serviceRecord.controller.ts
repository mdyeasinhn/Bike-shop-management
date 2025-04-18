
import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ServiceRecordService } from "./serviceRecord.service";
import { Request, Response } from "express";

const createService = catchAsync(async (req: Request, res: Response) => {
    const result = await ServiceRecordService.createService(req.body);
    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        success: true,
        message: "Service record created successfully!",
        data: result,
    });
});
const getAllServices = catchAsync(async (req: Request, res: Response) => {
    const result = await ServiceRecordService.getAllServices();
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: "Service records fetched successfully!",
      data: result,
    });
  });

  const getSpecificRecord = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await ServiceRecordService.getSpecificRecord(id);
  
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: "Service record fetched successfully!",
      data: result,
    });
  });

  const updatedServiceRecord = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = req.body;

    const result = await ServiceRecordService.updatedServiceRecord(id, data);

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Service marked as completed!",
        data: result,
    });

});
  const getPendingOrOverdueServices = catchAsync(async (req: Request, res: Response) => {
  
    const result = await ServiceRecordService.getPendingOrOverdueServices();

    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Overdue or pending services fetched successfully!",
        data: result,
    });

});



export const ServiceRecordController = {
    createService,
    getAllServices,
    getSpecificRecord,
    updatedServiceRecord,
    getPendingOrOverdueServices
}

