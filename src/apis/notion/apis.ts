/**
 * @author pontx-generator
 * @description API 类型定义
 */

import type * as schemas from './schemas';

// ============ asyncTasks 模块 ============

export type asyncTasks = {
  /**
   * GET /v1/async_tasks/{task_id}
   * 返回异步任务的状态、错误与结果。
   * @summary: 查询异步任务
   */
  retrieveAsyncTask: (
    /**
     * @title task id 值
     * @description 异步任务 ID。
     */
    task_id: string,
    requestInit?: RequestInit,
  ) => Promise<any>;

};

// ============ blocks 模块 ============

export declare namespace blocks {
  export type GetBlockChildrenParams = {
    /**
     * @title start cursor 值
     * @description 分页起始游标（不透明）。
     */
    start_cursor?: string;
    /**
     * @title page size 值
     * @description 每页返回条数。
     */
    page_size?: number;
  };

  export type PatchBlockChildrenParams = {
    /**
     * @title children 值
     * @description 子块列表。
     */
    children: Array<schemas.blockObjectRequest>;
    position?: schemas.contentPositionSchema;
  };

}

export type blocks = {
  /**
   * DELETE /v1/blocks/{block_id}
   * 删除块及其子块；已删除的块可通过工作区恢复。
   * @summary: 删除块
   */
  deleteBlock: (
    block_id: schemas.idRequest,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * GET /v1/blocks/{block_id}/children
   * 分页返回块下的直接子块列表。
   * @summary: 查询块子内容
   */
  getBlockChildren: (
    block_id: schemas.idRequest,
    params: blocks.GetBlockChildrenParams,
    requestInit?: RequestInit,
  ) => Promise<{
  block: schemas.emptyObject;
  /**
   * @title has more 值
   * @description 是否还有更多结果。
   */
  has_more: boolean;
  /**
   * @title next cursor 值
   * @description 下一页游标（不透明，应原样回传）。
   */
  next_cursor: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title results 值
   * @description results 字段。
   */
  results: Array<any>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string
}>;

  /**
   * PATCH /v1/blocks/{block_id}/children
   * 在块的末尾追加新的子块。
   * @summary: 追加块子内容
   */
  patchBlockChildren: (
    block_id: schemas.idRequest,
    params: blocks.PatchBlockChildrenParams,
    requestInit?: RequestInit,
  ) => Promise<{
  block: schemas.emptyObject;
  /**
   * @title has more 值
   * @description 是否还有更多结果。
   */
  has_more: boolean;
  /**
   * @title next cursor 值
   * @description 下一页游标（不透明，应原样回传）。
   */
  next_cursor: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title results 值
   * @description results 字段。
   */
  results: Array<any>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string
}>;

  /**
   * GET /v1/blocks/{block_id}
   * 按块 ID 返回块对象。
   * @summary: 查询块
   */
  retrieveBlock: (
    block_id: schemas.idRequest,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * PATCH /v1/blocks/{block_id}
   * 更新现有块的内容或属性。
   * @summary: 更新块
   */
  updateBlock: (
    block_id: schemas.idRequest,
    /**
     * @title body 值
     * @description body 字段。
     */
    body: any,
    requestInit?: RequestInit,
  ) => Promise<any>;

};

// ============ comments 模块 ============

export declare namespace comments {
  export type ListCommentsParams = {
    block_id: schemas.idRequest;
    /**
     * @title start cursor 值
     * @description 分页起始游标（不透明）。
     */
    start_cursor?: string;
    /**
     * @title page size 值
     * @description 每页返回条数。
     */
    page_size?: number;
  };

}

export type comments = {
  /**
   * POST /v1/comments
   * 在页面或块下创建文本评论，可附带附件。
   * @summary: 创建评论
   */
  createComment: (
    /**
     * @title body 值
     * @description body 字段。
     */
    body: any,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * DELETE /v1/comments/{comment_id}
   * 删除一条评论。
   * @summary: 删除评论
   */
  deleteComment: (
    comment_id: schemas.idRequest,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * GET /v1/comments
   * 按块或页面返回评论列表。
   * @summary: 列出评论
   */
  listComments: (
    params: comments.ListCommentsParams,
    requestInit?: RequestInit,
  ) => Promise<{
  comment: schemas.emptyObject;
  /**
   * @title has more 值
   * @description 是否还有更多结果。
   */
  has_more: boolean;
  /**
   * @title next cursor 值
   * @description 下一页游标（不透明，应原样回传）。
   */
  next_cursor: any;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  request_status?: schemas.requestStatusResponse;
  /**
   * @title results 值
   * @description results 字段。
   */
  results: Array<schemas.commentObjectResponse>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string
}>;

  /**
   * GET /v1/comments/{comment_id}
   * 按 ID 返回评论对象。
   * @summary: 查询评论
   */
  retrieveComment: (
    comment_id: schemas.idRequest,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * PATCH /v1/comments/{comment_id}
   * 更新评论的文本内容或附件。
   * @summary: 更新评论
   */
  updateComment: (
    comment_id: schemas.idRequest,
    /**
     * @title body 值
     * @description body 字段。
     */
    body: any,
    requestInit?: RequestInit,
  ) => Promise<any>;

};

// ============ customEmojis 模块 ============

export declare namespace customEmojis {
  export type ListCustomEmojisParams = {
    /**
     * @title start cursor 值
     * @description 分页起始游标（不透明）。
     */
    start_cursor?: string;
    /**
     * @title page size 值
     * @description 每页返回条数。
     */
    page_size?: number;
    /**
     * @title name 值
     * @description 名称。
     */
    name?: string;
  };

}

export type customEmojis = {
  /**
   * GET /v1/custom_emojis
   * 分页返回工作区可用的自定义表情符号。
   * @summary: 列出自定义表情
   */
  listCustomEmojis: (
    params: customEmojis.ListCustomEmojisParams,
    requestInit?: RequestInit,
  ) => Promise<{
  /**
   * @title has more 值
   * @description 是否还有更多结果。
   */
  has_more: boolean;
  /**
   * @title next cursor 值
   * @description 下一页游标（不透明，应原样回传）。
   */
  next_cursor: any;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title results 值
   * @description results 字段。
   */
  results: Array<schemas.customEmojiResponse>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string
}>;

};

// ============ dataSources 模块 ============

export declare namespace dataSources {
  export type CreateDataSourceParams = {
    /**
     * @title icon 值
     * @description 资源图标。
     */
    icon?: any;
    parent: schemas.parentOfDataSourceRequest;
    /**
     * @title properties 值
     * @description 页面属性值或数据源属性模式。
     */
    properties: Record<any, schemas.propertyConfigurationRequest>;
    /**
     * @title title 值
     * @description 资源标题。
     */
    title?: Array<schemas.richTextItemRequest>;
  };

  export type ListDataSourceTemplatesParams = {
    /**
     * @title name 值
     * @description 名称。
     */
    name?: string;
    /**
     * @title start cursor 值
     * @description 分页起始游标（不透明）。
     */
    start_cursor?: string;
    /**
     * @title page size 值
     * @description 每页返回条数。
     */
    page_size?: number;
  };

  export type QueryDataSourceParams = {
    /**
     * @title filter properties 值
     * @description 仅返回指定属性的值。
     */
    filter_properties?: Array<string>;
    /**
     * @title filter 值
     * @description 过滤条件。
     */
    filter?: any;
    /**
     * @title is archived 值
     * @description is archived 字段。
     */
    is_archived?: boolean;
    /**
     * @title page size 值
     * @description 每页返回条数。
     */
    page_size?: number;
    /**
     * @title result type 值
     * @description result type 字段。
     */
    result_type?: 'page' | 'data_source';
    /**
     * @title sorts 值
     * @description sorts 字段。
     */
    sorts?: Array<any>;
    /**
     * @title start cursor 值
     * @description 分页起始游标（不透明）。
     */
    start_cursor?: string;
  };

  export type UpdateDataSourceParams = {
    /**
     * @title icon 值
     * @description 资源图标。
     */
    icon?: any;
    /**
     * @title in trash 值
     * @description 资源是否在回收站。
     */
    in_trash?: boolean;
    parent?: schemas.parentOfDataSourceRequest;
    /**
     * @title properties 值
     * @description 页面属性值或数据源属性模式。
     */
    properties?: Record<any, any>;
    /**
     * @title title 值
     * @description 资源标题。
     */
    title?: Array<schemas.richTextItemRequest>;
  };

}

export type dataSources = {
  /**
   * POST /v1/data_sources
   * 在父级下创建新的数据源，并定义其属性模式。
   * @summary: 创建数据源（数据库）
   */
  createDataSource: (
    params: dataSources.CreateDataSourceParams,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * GET /v1/data_sources/{data_source_id}/templates
   * 分页返回数据源可用的模板。
   * @summary: 列出数据源模板
   */
  listDataSourceTemplates: (
    data_source_id: schemas.idRequest,
    params: dataSources.ListDataSourceTemplatesParams,
    requestInit?: RequestInit,
  ) => Promise<{
  /**
   * @title has more 值
   * @description 是否还有更多结果。
   */
  has_more: boolean;
  /**
   * @title next cursor 值
   * @description 下一页游标（不透明，应原样回传）。
   */
  next_cursor: any;
  /**
   * @title templates 值
   * @description templates 字段。
   */
  templates: Array<{
    id: schemas.idResponse;
    /**
     * @title is default 值
     * @description is default 字段。
     */
    is_default: boolean;
    /**
     * @title name 值
     * @description 名称。
     */
    name: string
  }>
}>;

  /**
   * POST /v1/data_sources/{data_source_id}/query
   * 按过滤、排序与分页条件查询数据源中的条目（页面）。
   * @summary: 查询数据源内容
   */
  queryDataSource: (
    data_source_id: schemas.idRequest,
    params: dataSources.QueryDataSourceParams,
    requestInit?: RequestInit,
  ) => Promise<{
  /**
   * @title has more 值
   * @description 是否还有更多结果。
   */
  has_more: boolean;
  /**
   * @title next cursor 值
   * @description 下一页游标（不透明，应原样回传）。
   */
  next_cursor: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  page_or_data_source: schemas.emptyObject;
  /**
   * @title request status 值
   * @description request status 字段。
   */
  request_status?: {
    /**
     * @title incomplete reason 值
     * @description incomplete reason 字段。
     */
    incomplete_reason?: 'query_result_limit_reached';
    /**
     * @title type 值
     * @description 对象或块类型。
     */
    type: 'complete' | 'incomplete'
  };
  /**
   * @title results 值
   * @description results 字段。
   */
  results: Array<any>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string
}>;

  /**
   * GET /v1/data_sources/{data_source_id}
   * 按 ID 返回数据源对象及其模式信息。
   * @summary: 查询数据源
   */
  retrieveDataSource: (
    data_source_id: schemas.idRequest,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * PATCH /v1/data_sources/{data_source_id}
   * 更新数据源的标题、说明、图标或模式。
   * @summary: 更新数据源
   */
  updateDataSource: (
    data_source_id: schemas.idRequest,
    params: dataSources.UpdateDataSourceParams,
    requestInit?: RequestInit,
  ) => Promise<any>;

};

// ============ databases 模块 ============

export declare namespace databases {
  export type CreateDatabaseParams = {
    cover?: schemas.pageCoverRequest;
    /**
     * @title description 值
     * @description 资源说明。
     */
    description?: Array<schemas.richTextItemRequest>;
    icon?: schemas.pageIconRequest;
    initial_data_source?: schemas.initialDataSourceRequest;
    /**
     * @title is inline 值
     * @description is inline 字段。
     */
    is_inline?: boolean;
    /**
     * @title parent 值
     * @description 父级对象。
     */
    parent: any;
    /**
     * @title title 值
     * @description 资源标题。
     */
    title?: Array<schemas.richTextItemRequest>;
  };

  export type UpdateDatabaseParams = {
    cover?: schemas.pageCoverRequest;
    /**
     * @title description 值
     * @description 资源说明。
     */
    description?: Array<schemas.richTextItemRequest>;
    icon?: schemas.pageIconRequest;
    /**
     * @title in trash 值
     * @description 资源是否在回收站。
     */
    in_trash?: boolean;
    /**
     * @title is inline 值
     * @description is inline 字段。
     */
    is_inline?: boolean;
    /**
     * @title is locked 值
     * @description is locked 字段。
     */
    is_locked?: boolean;
    /**
     * @title parent 值
     * @description 父级对象。
     */
    parent?: any;
    /**
     * @title title 值
     * @description 资源标题。
     */
    title?: Array<schemas.richTextItemRequest>;
  };

}

export type databases = {
  /**
   * POST /v1/databases
   * 在父级下创建新的数据库对象。
   * @summary: 创建数据库
   */
  createDatabase: (
    params: databases.CreateDatabaseParams,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * GET /v1/databases/{database_id}
   * 按 ID 返回数据库对象及其属性模式（旧版数据库资源）。
   * @summary: 查询数据库
   */
  retrieveDatabase: (
    database_id: schemas.idRequest,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * PATCH /v1/databases/{database_id}
   * 更新数据库的标题、说明、图标或属性模式。
   * @summary: 更新数据库
   */
  updateDatabase: (
    database_id: schemas.idRequest,
    params: databases.UpdateDatabaseParams,
    requestInit?: RequestInit,
  ) => Promise<any>;

};

// ============ fileUploads 模块 ============

export declare namespace fileUploads {
  export type CreateFileUploadParams = {
    /**
     * @title content type 值
     * @description content type 字段。
     */
    content_type?: string;
    /**
     * @title external url 值
     * @description external url 字段。
     */
    external_url?: string;
    /**
     * @title filename 值
     * @description filename 字段。
     */
    filename?: string;
    /**
     * @title mode 值
     * @description mode 字段。
     */
    mode?: 'single_part' | 'multi_part' | 'external_url';
    /**
     * @title number of parts 值
     * @description number of parts 字段。
     */
    number_of_parts?: number;
  };

  export type ListFileUploadsParams = {
    /**
     * @title status 值
     * @description HTTP 状态码。
     */
    status?: 'pending' | 'uploaded' | 'expired' | 'failed';
    /**
     * @title start cursor 值
     * @description 分页起始游标（不透明）。
     */
    start_cursor?: string;
    /**
     * @title page size 值
     * @description 每页返回条数。
     */
    page_size?: number;
  };

}

export type fileUploads = {
  /**
   * POST /v1/file_uploads/{file_upload_id}/complete
   * 标记分片上传完成并返回最终的文件对象。
   * @summary: 完成文件上传
   */
  completeFileUpload: (
    file_upload_id: schemas.idRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.fileUploadObjectResponse>;

  /**
   * POST /v1/file_uploads
   * 为不超过 20MB 的小文件创建文件上传记录并返回上传 URL 或直接数据。
   * @summary: 创建文件上传
   */
  createFileUpload: (
    params: fileUploads.CreateFileUploadParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.fileUploadObjectResponse>;

  /**
   * GET /v1/file_uploads
   * 按状态分页返回连接的文件上传记录。
   * @summary: 列出文件上传
   */
  listFileUploads: (
    params: fileUploads.ListFileUploadsParams,
    requestInit?: RequestInit,
  ) => Promise<{
  file_upload: schemas.emptyObject;
  /**
   * @title has more 值
   * @description 是否还有更多结果。
   */
  has_more: boolean;
  /**
   * @title next cursor 值
   * @description 下一页游标（不透明，应原样回传）。
   */
  next_cursor: any;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  request_status?: schemas.requestStatusResponse;
  /**
   * @title results 值
   * @description results 字段。
   */
  results: Array<schemas.fileUploadObjectResponse>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string
}>;

  /**
   * GET /v1/file_uploads/{file_upload_id}
   * 按 ID 返回文件上传记录及其状态。
   * @summary: 查询文件上传
   */
  retrieveFileUpload: (
    file_upload_id: schemas.idRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.fileUploadObjectResponse>;

  /**
   * POST /v1/file_uploads/{file_upload_id}/send
   * 以 multipart 表单上传大文件的一个分片（绑定文件上传记录 ID）。
   * @summary: 上传文件分片
   */
  uploadFilePart: (
    file_upload_id: schemas.idRequest,
    /**
     * @title body 值
     * @description body 字段。
     */
    body: {
      /**
       * @title file 值
       * @description 文件二进制内容。
       */
      file: {

      };
      /**
       * @title part number 值
       * @description 分片序号（1–1000）。
       */
      part_number?: string
    },
    requestInit?: RequestInit,
  ) => Promise<schemas.fileUploadObjectResponse>;

};

// ============ meetingNotes 模块 ============

export declare namespace meetingNotes {
  export type QueryMeetingNotesParams = {
    /**
     * @title filter 值
     * @description 过滤条件。
     */
    filter: {
      /**
       * @title filters 值
       * @description filters 字段。
       */
      filters?: Array<any>;
      /**
       * @title operator 值
       * @description operator 字段。
       */
      operator: 'and' | 'or'
    };
    /**
     * @title limit 值
     * @description limit 字段。
     */
    limit?: number;
    /**
     * @title sort 值
     * @description 排序条件。
     */
    sort?: Array<{
      /**
       * @title direction 值
       * @description direction 字段。
       */
      direction: 'ascending' | 'descending';
      /**
       * @title property 值
       * @description property 字段。
       */
      property: 'title' | 'attendees' | 'created_time' | 'created_by' | 'last_edited_time' | 'last_edited_by'
    }>;
  };

}

export type meetingNotes = {
  /**
   * POST /v1/blocks/meeting_notes
   * 创建会议记录块。
   * @summary: 创建会议记录
   */
  createMeetingNote: (
    /**
     * @title body 值
     * @description body 字段。
     */
    body: any,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * POST /v1/blocks/meeting_notes/query
   * 按条件查询会议记录。
   * @summary: 查询会议记录
   */
  queryMeetingNotes: (
    params: meetingNotes.QueryMeetingNotesParams,
    requestInit?: RequestInit,
  ) => Promise<{
  /**
   * @title has more 值
   * @description 是否还有更多结果。
   */
  has_more: boolean;
  /**
   * @title results 值
   * @description results 字段。
   */
  results: Array<{
    created_by: schemas.partialUserObjectResponse;
    /**
     * @title created time 值
     * @description 创建时间（ISO 8601）。
     */
    created_time: string;
    /**
     * @title has children 值
     * @description has children 字段。
     */
    has_children: boolean;
    id: schemas.idResponse;
    /**
     * @title in trash 值
     * @description 资源是否在回收站。
     */
    in_trash: boolean;
    last_edited_by: schemas.partialUserObjectResponse;
    /**
     * @title last edited time 值
     * @description 最后编辑时间（ISO 8601）。
     */
    last_edited_time: string;
    /**
     * @title meeting notes 值
     * @description meeting notes 字段。
     */
    meeting_notes: {
      /**
       * @title calendar event 值
       * @description calendar event 字段。
       */
      calendar_event: {
        /**
         * @title attendees 值
         * @description attendees 字段。
         */
        attendees?: Array<schemas.idResponse>;
        /**
         * @title end time 值
         * @description end time 字段。
         */
        end_time: string;
        /**
         * @title start time 值
         * @description start time 字段。
         */
        start_time: string
      };
      /**
       * @title children 值
       * @description 子块列表。
       */
      children?: {
        notes_block_id?: schemas.idResponse;
        summary_block_id?: schemas.idResponse;
        transcript_block_id?: schemas.idResponse
      };
      /**
       * @title recording 值
       * @description recording 字段。
       */
      recording?: {
        /**
         * @title end time 值
         * @description end time 字段。
         */
        end_time?: string;
        /**
         * @title start time 值
         * @description start time 字段。
         */
        start_time?: string
      };
      /**
       * @title status 值
       * @description HTTP 状态码。
       */
      status?: 'transcription_not_started' | 'transcription_paused' | 'transcription_in_progress' | 'transcription_failed' | 'summary_in_progress' | 'notes_ready';
      /**
       * @title title 值
       * @description 资源标题。
       */
      title?: Array<schemas.richTextItemResponse>
    };
    /**
     * @title object 值
     * @description 资源对象类型。
     */
    object: string;
    /**
     * @title type 值
     * @description 对象或块类型。
     */
    type: string
  }>
}>;

};

// ============ oAuth 模块 ============

export declare namespace oAuth {
  export type IntrospectTokenParams = {
    /**
     * @title token 值
     * @description token 字段。
     */
    token: string;
  };

  export type RevokeTokenParams = {
    /**
     * @title token 值
     * @description token 字段。
     */
    token: string;
  };

}

export type oAuth = {
  /**
   * POST /v1/oauth/token
   * 用授权码或刷新令牌换取 OAuth 访问令牌（HTTP Basic 客户端凭据）。
   * @summary: OAuth 换取访问令牌
   */
  createToken: (
    /**
     * @title body 值
     * @description body 字段。
     */
    body: any,
    requestInit?: RequestInit,
  ) => Promise<{
  /**
   * @title access token 值
   * @description OAuth 访问令牌。
   */
  access_token: string;
  /**
   * @title bot id 值
   * @description 连接（机器人）ID。
   */
  bot_id: string;
  /**
   * @title duplicated template id 值
   * @description 复制的模板 ID。
   */
  duplicated_template_id: string;
  /**
   * @title owner 值
   * @description 连接所有者。
   */
  owner: any;
  /**
   * @title refresh token 值
   * @description OAuth 刷新令牌。
   */
  refresh_token: string;
  /**
   * @title request id 值
   * @description 请求 ID。
   */
  request_id?: string;
  /**
   * @title token type 值
   * @description 令牌类型。
   */
  token_type: string;
  /**
   * @title workspace icon 值
   * @description 工作区图标。
   */
  workspace_icon: string;
  /**
   * @title workspace id 值
   * @description 工作区 ID。
   */
  workspace_id: string;
  /**
   * @title workspace name 值
   * @description 工作区名称。
   */
  workspace_name: string
}>;

  /**
   * POST /v1/oauth/introspect
   * 返回 OAuth 令牌的元数据（激活状态、类型、关联工作区）。
   * @summary: 检查 OAuth 令牌
   */
  introspectToken: (
    params: oAuth.IntrospectTokenParams,
    requestInit?: RequestInit,
  ) => Promise<{
  /**
   * @title active 值
   * @description 令牌是否激活。
   */
  active: boolean;
  /**
   * @title iat 值
   * @description iat 字段。
   */
  iat?: number;
  /**
   * @title request id 值
   * @description 请求 ID。
   */
  request_id?: string;
  /**
   * @title scope 值
   * @description scope 字段。
   */
  scope?: string
}>;

  /**
   * POST /v1/oauth/revoke
   * 撤销 OAuth 访问令牌或刷新令牌。
   * @summary: 撤销 OAuth 令牌
   */
  revokeToken: (
    params: oAuth.RevokeTokenParams,
    requestInit?: RequestInit,
  ) => Promise<{
  /**
   * @title request id 值
   * @description 请求 ID。
   */
  request_id?: string
}>;

};

// ============ pages 模块 ============

export declare namespace pages {
  export type MovePageParams = {
    /**
     * @title parent 值
     * @description 父级对象。
     */
    parent: any;
  };

  export type PatchPageParams = {
    /**
     * @title filter properties 值
     * @description 仅返回指定属性的值。
     */
    filter_properties?: Array<string>;
    /**
     * @title cover 值
     * @description 资源封面。
     */
    cover?: any;
    /**
     * @title erase content 值
     * @description erase content 字段。
     */
    erase_content?: boolean;
    /**
     * @title icon 值
     * @description 资源图标。
     */
    icon?: any;
    /**
     * @title in trash 值
     * @description 资源是否在回收站。
     */
    in_trash?: boolean;
    /**
     * @title is archived 值
     * @description is archived 字段。
     */
    is_archived?: boolean;
    /**
     * @title is locked 值
     * @description is locked 字段。
     */
    is_locked?: boolean;
    /**
     * @title properties 值
     * @description 页面属性值或数据源属性模式。
     */
    properties?: Record<any, any>;
    /**
     * @title template 值
     * @description template 字段。
     */
    template?: any;
  };

  export type PostPageParams = {
    /**
     * @title filter properties 值
     * @description 仅返回指定属性的值。
     */
    filter_properties?: Array<string>;
    /**
     * @title allow async 值
     * @description allow async 字段。
     */
    allow_async?: boolean;
    /**
     * @title children 值
     * @description 子块列表。
     */
    children?: Array<schemas.blockObjectRequest>;
    /**
     * @title content 值
     * @description 文本内容。
     */
    content?: Array<schemas.blockObjectRequest>;
    /**
     * @title cover 值
     * @description 资源封面。
     */
    cover?: any;
    /**
     * @title icon 值
     * @description 资源图标。
     */
    icon?: any;
    /**
     * @title markdown 值
     * @description markdown 字段。
     */
    markdown?: string;
    /**
     * @title parent 值
     * @description 父级对象。
     */
    parent?: any;
    position?: schemas.pagePositionSchema;
    /**
     * @title properties 值
     * @description 页面属性值或数据源属性模式。
     */
    properties?: Record<any, any>;
    /**
     * @title template 值
     * @description template 字段。
     */
    template?: any;
  };

  export type RetrievePageParams = {
    /**
     * @title filter properties 值
     * @description 仅返回指定属性的值。
     */
    filter_properties?: Array<string>;
  };

  export type RetrievePageMarkdownParams = {
    /**
     * @title include transcript 值
     * @description 是否包含转录内容。
     */
    include_transcript?: boolean;
  };

  export type RetrievePagePropertyParams = {
    /**
     * @title start cursor 值
     * @description 分页起始游标（不透明）。
     */
    start_cursor?: string;
    /**
     * @title page size 值
     * @description 每页返回条数。
     */
    page_size?: number;
  };

}

export type pages = {
  /**
   * POST /v1/pages/{page_id}/move
   * 把页面移动到新的父级或新位置，可用于调整页面层级。
   * @summary: 移动页面
   */
  movePage: (
    page_id: schemas.idRequest,
    params: pages.MovePageParams,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * PATCH /v1/pages/{page_id}
   * 更新现有页面的属性值；未提供的属性保持不变。
   * @summary: 更新页面属性
   */
  patchPage: (
    page_id: schemas.idRequest,
    params: pages.PatchPageParams,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * POST /v1/pages
   * 在指定父级下创建新页面，并可携带属性与子块内容。
   * @summary: 创建页面
   */
  postPage: (
    params: pages.PostPageParams,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * GET /v1/pages/{page_id}
   * 按页面 ID 返回页面对象及其属性值。
   * @summary: 查询页面
   */
  retrievePage: (
    page_id: schemas.idRequest,
    params: pages.RetrievePageParams,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * GET /v1/pages/{page_id}/markdown
   * 把页面内容渲染为 Notion 风格的 Markdown 并返回。
   * @summary: 获取页面 Markdown
   */
  retrievePageMarkdown: (
    page_id: schemas.idRequest,
    params: pages.RetrievePageMarkdownParams,
    requestInit?: RequestInit,
  ) => Promise<schemas.pageMarkdownResponse>;

  /**
   * GET /v1/pages/{page_id}/properties/{property_id}
   * 分页返回页面属性的所有值项，用于多值或超大属性。
   * @summary: 查询页面属性项
   */
  retrievePageProperty: (
    page_id: schemas.idRequest,
    /**
     * @title property id 值
     * @description 属性 ID。
     */
    property_id: string,
    params: pages.RetrievePagePropertyParams,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * PATCH /v1/pages/{page_id}/markdown
   * 用 Markdown 内容替换页面主体，可保留或替换附件。
   * @summary: 更新页面 Markdown
   */
  updatePageMarkdown: (
    page_id: schemas.idRequest,
    /**
     * @title body 值
     * @description body 字段。
     */
    body: any,
    requestInit?: RequestInit,
  ) => Promise<schemas.pageMarkdownResponse>;

};

// ============ search 模块 ============

export declare namespace search {
  export type SearchParams = {
    /**
     * @title filter 值
     * @description 过滤条件。
     */
    filter?: any;
    /**
     * @title page size 值
     * @description 每页返回条数。
     */
    page_size?: number;
    /**
     * @title query 值
     * @description 搜索查询词。
     */
    query?: string;
    /**
     * @title sort 值
     * @description 排序条件。
     */
    sort?: any;
    /**
     * @title start cursor 值
     * @description 分页起始游标（不透明）。
     */
    start_cursor?: string;
  };

}

export type search = {
  /**
   * POST /v1/search
   * 按查询词、对象类型过滤与排序搜索连接可见的页面和数据源。
   * @summary: 搜索
   */
  search: (
    params: search.SearchParams,
    requestInit?: RequestInit,
  ) => Promise<{
  /**
   * @title has more 值
   * @description 是否还有更多结果。
   */
  has_more: boolean;
  /**
   * @title next cursor 值
   * @description 下一页游标（不透明，应原样回传）。
   */
  next_cursor: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  page_or_data_source: schemas.emptyObject;
  /**
   * @title request status 值
   * @description request status 字段。
   */
  request_status?: {
    /**
     * @title incomplete reason 值
     * @description incomplete reason 字段。
     */
    incomplete_reason?: 'query_result_limit_reached';
    /**
     * @title type 值
     * @description 对象或块类型。
     */
    type: 'complete' | 'incomplete'
  };
  /**
   * @title results 值
   * @description results 字段。
   */
  results: Array<any>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string
}>;

};

// ============ users 模块 ============

export declare namespace users {
  export type GetUsersParams = {
    /**
     * @title start cursor 值
     * @description 分页起始游标（不透明）。
     */
    start_cursor?: string;
    /**
     * @title page size 值
     * @description 每页返回条数。
     */
    page_size?: number;
  };

}

export type users = {
  /**
   * GET /v1/users/me
   * 返回当前访问令牌对应的连接（机器人或用户）资料；个人访问令牌返回创建该令牌的用户。
   * @summary: 查询当前连接身份
   */
  getSelf: (
    requestInit?: RequestInit,
  ) => Promise<schemas.userObjectResponse>;

  /**
   * GET /v1/users/{user_id}
   * 按用户 ID 返回工作区成员、访客或连接的用户对象。
   * @summary: 查询用户
   */
  getUser: (
    user_id: schemas.idRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.userObjectResponse>;

  /**
   * GET /v1/users
   * 分页返回工作区中连接可见的用户列表。
   * @summary: 列出用户
   */
  getUsers: (
    params: users.GetUsersParams,
    requestInit?: RequestInit,
  ) => Promise<{
  /**
   * @title has more 值
   * @description 是否还有更多结果。
   */
  has_more: boolean;
  /**
   * @title next cursor 值
   * @description 下一页游标（不透明，应原样回传）。
   */
  next_cursor: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title results 值
   * @description results 字段。
   */
  results: Array<schemas.userObjectResponse>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
  user: schemas.emptyObject
}>;

};

// ============ views 模块 ============

export declare namespace views {
  export type GetViewQueryResultsParams = {
    /**
     * @title start cursor 值
     * @description 分页起始游标（不透明）。
     */
    start_cursor?: string;
    /**
     * @title page size 值
     * @description 每页返回条数。
     */
    page_size?: number;
  };

  export type ListViewsParams = {
    database_id?: schemas.idRequest;
    data_source_id?: schemas.idRequest;
    /**
     * @title start cursor 值
     * @description 分页起始游标（不透明）。
     */
    start_cursor?: string;
    /**
     * @title page size 值
     * @description 每页返回条数。
     */
    page_size?: number;
  };

}

export type views = {
  /**
   * POST /v1/views
   * 在数据源下创建新视图。
   * @summary: 创建视图
   */
  createView: (
    body: schemas.createViewRequest,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * POST /v1/views/{view_id}/queries
   * 创建视图查询并返回首个结果页。
   * @summary: 创建视图查询
   */
  createViewQuery: (
    view_id: schemas.idRequest,
    body: schemas.createViewQueryRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.viewQueryResponse>;

  /**
   * DELETE /v1/views/{view_id}
   * 删除一个视图。
   * @summary: 删除视图
   */
  deleteView: (
    view_id: schemas.idRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.partialDataSourceViewObjectResponse>;

  /**
   * DELETE /v1/views/{view_id}/queries/{query_id}
   * 删除一个视图查询。
   * @summary: 删除视图查询
   */
  deleteViewQuery: (
    view_id: schemas.idRequest,
    query_id: schemas.idRequest,
    requestInit?: RequestInit,
  ) => Promise<schemas.deletedViewQueryResponse>;

  /**
   * GET /v1/views/{view_id}/queries/{query_id}
   * 分页获取已创建视图查询的结果。
   * @summary: 获取视图查询结果
   */
  getViewQueryResults: (
    view_id: schemas.idRequest,
    query_id: schemas.idRequest,
    params: views.GetViewQueryResultsParams,
    requestInit?: RequestInit,
  ) => Promise<{
  /**
   * @title has more 值
   * @description 是否还有更多结果。
   */
  has_more: boolean;
  /**
   * @title next cursor 值
   * @description 下一页游标（不透明，应原样回传）。
   */
  next_cursor: any;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  page: schemas.emptyObject;
  request_status?: schemas.requestStatusResponse;
  /**
   * @title results 值
   * @description results 字段。
   */
  results: Array<schemas.partialPageObjectResponse>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string
}>;

  /**
   * GET /v1/views
   * 按数据库或数据源列出视图。
   * @summary: 列出视图
   */
  listViews: (
    params: views.ListViewsParams,
    requestInit?: RequestInit,
  ) => Promise<{
  /**
   * @title has more 值
   * @description 是否还有更多结果。
   */
  has_more: boolean;
  /**
   * @title next cursor 值
   * @description 下一页游标（不透明，应原样回传）。
   */
  next_cursor: any;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  request_status?: schemas.requestStatusResponse;
  /**
   * @title results 值
   * @description results 字段。
   */
  results: Array<schemas.dataSourceViewReferenceResponse>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
  view: schemas.emptyObject
}>;

  /**
   * GET /v1/views/{view_id}
   * 按 ID 返回视图对象。
   * @summary: 查询视图
   */
  retrieveView: (
    view_id: schemas.idRequest,
    requestInit?: RequestInit,
  ) => Promise<any>;

  /**
   * PATCH /v1/views/{view_id}
   * 更新视图的配置。
   * @summary: 更新视图
   */
  updateView: (
    view_id: schemas.idRequest,
    body: schemas.updateViewRequest,
    requestInit?: RequestInit,
  ) => Promise<any>;

};

// ============ API 集合类型 ============

/**
 * API 类型定义
 */
export type APIs = {
  /** asyncTasks 模块 */
  asyncTasks: asyncTasks;
  /** blocks 模块 */
  blocks: blocks;
  /** comments 模块 */
  comments: comments;
  /** customEmojis 模块 */
  customEmojis: customEmojis;
  /** dataSources 模块 */
  dataSources: dataSources;
  /** databases 模块 */
  databases: databases;
  /** fileUploads 模块 */
  fileUploads: fileUploads;
  /** meetingNotes 模块 */
  meetingNotes: meetingNotes;
  /** oAuth 模块 */
  oAuth: oAuth;
  /** pages 模块 */
  pages: pages;
  /** search 模块 */
  search: search;
  /** users 模块 */
  users: users;
  /** views 模块 */
  views: views;
};

export declare namespace APIs {
  export { asyncTasks };
  export { blocks };
  export { comments };
  export { customEmojis };
  export { dataSources };
  export { databases };
  export { fileUploads };
  export { meetingNotes };
  export { oAuth };
  export { pages };
  export { search };
  export { users };
  export { views };
}
