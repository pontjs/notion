/**
 * @title agentIdParentForBlockBasedObjectResponse 数据结构
 * @description agent Id Parent For Block Based Object Response 字段。
 */
export type agentIdParentForBlockBasedObjectResponse = {
  agent_id: idResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title annotationRequest 数据结构
 * @description annotation Request 字段。
 */
export type annotationRequest = {
  /**
   * @title bold 值
   * @description bold 字段。
   */
  bold?: boolean;
  /**
   * @title code 值
   * @description 错误代码。
   */
  code?: boolean;
  color?: apiColor;
  /**
   * @title italic 值
   * @description italic 字段。
   */
  italic?: boolean;
  /**
   * @title strikethrough 值
   * @description strikethrough 字段。
   */
  strikethrough?: boolean;
  /**
   * @title underline 值
   * @description underline 字段。
   */
  underline?: boolean;
}

/**
 * @title annotationResponse 数据结构
 * @description annotation Response 字段。
 */
export type annotationResponse = {
  /**
   * @title bold 值
   * @description bold 字段。
   */
  bold: boolean;
  /**
   * @title code 值
   * @description 错误代码。
   */
  code: boolean;
  color: apiColor;
  /**
   * @title italic 值
   * @description italic 字段。
   */
  italic: boolean;
  /**
   * @title strikethrough 值
   * @description strikethrough 字段。
   */
  strikethrough: boolean;
  /**
   * @title underline 值
   * @description underline 字段。
   */
  underline: boolean;
}

/**
 * @title apiColor 数据结构
 * @description api Color 字段。
 */
export type apiColor = 'default' | 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red' | 'default_background' | 'gray_background' | 'brown_background' | 'orange_background' | 'yellow_background' | 'green_background' | 'blue_background' | 'purple_background' | 'pink_background' | 'red_background'

/**
 * @title apiTranscriptionStatus 数据结构
 * @description api Transcription Status 字段。
 */
export type apiTranscriptionStatus = 'transcription_not_started' | 'transcription_paused' | 'transcription_in_progress' | 'transcription_failed' | 'summary_in_progress' | 'notes_ready'

/**
 * @title arrayBasedPropertyValueResponse 数据结构
 * @description array Based Property Value Response 字段。
 */
export type arrayBasedPropertyValueResponse = any

/**
 * @title arrayPartialRollupValueResponse 数据结构
 * @description array Partial Rollup Value Response 字段。
 */
export type arrayPartialRollupValueResponse = {
  /**
   * @title array 值
   * @description array 字段。
   */
  array: Array<simpleOrArrayPropertyValueResponse>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title asyncTaskMcpOperationName 数据结构
 * @description async Task Mcp Operation Name 字段。
 */
export type asyncTaskMcpOperationName = 'create_pages' | 'update_page'

/**
 * @title asyncTaskRestOperationName 数据结构
 * @description async Task Rest Operation Name 字段。
 */
export type asyncTaskRestOperationName = 'POST /v1/pages' | 'PATCH /v1/pages/:page_id/markdown'

/**
 * @title audioBlockObjectResponse 数据结构
 * @description audio Block Object Response 字段。
 */
export type audioBlockObjectResponse = {
  audio: mediaContentWithFileAndCaptionResponse;
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title baseWebhookPayload 数据结构
 * @description base Webhook Payload 字段。
 */
export type baseWebhookPayload = {
  /**
   * @title accessible by 值
   * @description accessible by 字段。
   */
  accessible_by?: Array<any>;
  /**
   * @title api version 值
   * @description api version 字段。
   */
  api_version: '2022-06-28' | '2025-09-03' | '2026-03-11';
  /**
   * @title attempt number 值
   * @description attempt number 字段。
   */
  attempt_number: number;
  /**
   * @title authors 值
   * @description authors 字段。
   */
  authors: Array<any>;
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  integration_id: idResponse;
  subscription_id: idResponse;
  /**
   * @title timestamp 值
   * @description timestamp 字段。
   */
  timestamp: string;
  workspace_id: idResponse;
  /**
   * @title workspace name 值
   * @description 工作区名称。
   */
  workspace_name: string;
}

/**
 * @title blockIdCommentParentResponse 数据结构
 * @description block Id Comment Parent Response 字段。
 */
export type blockIdCommentParentResponse = {
  block_id: idResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title blockIdParentForBlockBasedObjectResponse 数据结构
 * @description block Id Parent For Block Based Object Response 字段。
 */
export type blockIdParentForBlockBasedObjectResponse = {
  block_id: idResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title blockObjectRequest 数据结构
 * @description block Object Request 字段。
 */
export type blockObjectRequest = any

/**
 * @title blockObjectRequestWithoutChildren 数据结构
 * @description block Object Request Without Children 字段。
 */
export type blockObjectRequestWithoutChildren = any

/**
 * @title blockObjectResponse 数据结构
 * @description 块对象响应。
 */
export type blockObjectResponse = any

/**
 * @title blockObjectWithSingleLevelOfChildrenRequest 数据结构
 * @description block Object With Single Level Of Children Request 字段。
 */
export type blockObjectWithSingleLevelOfChildrenRequest = any

/**
 * @title boardViewConfigRequest 数据结构
 * @description board View Config Request 字段。
 */
export type boardViewConfigRequest = {
  /**
   * @title card layout 值
   * @description card layout 字段。
   */
  card_layout?: 'list' | 'compact';
  /**
   * @title cover 值
   * @description 资源封面。
   */
  cover?: any;
  /**
   * @title cover aspect 值
   * @description cover aspect 字段。
   */
  cover_aspect?: 'contain' | 'cover';
  /**
   * @title cover size 值
   * @description cover size 字段。
   */
  cover_size?: 'small' | 'medium' | 'large';
  group_by: groupByConfigRequest;
  /**
   * @title properties 值
   * @description 页面属性值或数据源属性模式。
   */
  properties?: Array<viewPropertyConfigRequest>;
  /**
   * @title sub group by 值
   * @description sub group by 字段。
   */
  sub_group_by?: any;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title boardViewConfigResponse 数据结构
 * @description board View Config Response 字段。
 */
export type boardViewConfigResponse = {
  /**
   * @title card layout 值
   * @description card layout 字段。
   */
  card_layout?: 'list' | 'compact';
  cover?: coverConfigResponse;
  /**
   * @title cover aspect 值
   * @description cover aspect 字段。
   */
  cover_aspect?: 'contain' | 'cover';
  /**
   * @title cover size 值
   * @description cover size 字段。
   */
  cover_size?: 'small' | 'medium' | 'large';
  group_by: groupByConfigResponse;
  /**
   * @title properties 值
   * @description 页面属性值或数据源属性模式。
   */
  properties?: Array<viewPropertyConfigResponse>;
  sub_group_by?: groupByConfigResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title bookmarkBlockObjectResponse 数据结构
 * @description bookmark Block Object Response 字段。
 */
export type bookmarkBlockObjectResponse = {
  bookmark: mediaContentWithUrlAndCaptionResponse;
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title booleanFormulaPropertyResponse 数据结构
 * @description boolean Formula Property Response 字段。
 */
export type booleanFormulaPropertyResponse = {
  /**
   * @title boolean 值
   * @description boolean 字段。
   */
  boolean: boolean;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title booleanFormulaPropertyValueResponse 数据结构
 * @description boolean Formula Property Value Response 字段。
 */
export type booleanFormulaPropertyValueResponse = {
  /**
   * @title boolean 值
   * @description boolean 字段。
   */
  boolean: boolean;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title botInfoResponse 数据结构
 * @description bot Info Response 字段。
 */
export type botInfoResponse = {
  /**
   * @title owner 值
   * @description 连接所有者。
   */
  owner: any;
  /**
   * @title workspace id 值
   * @description 工作区 ID。
   */
  workspace_id: string;
  /**
   * @title workspace limits 值
   * @description workspace limits 字段。
   */
  workspace_limits: {
    /**
     * @title max file upload size in bytes 值
     * @description max file upload size in bytes 字段。
     */
    max_file_upload_size_in_bytes: number
  };
  /**
   * @title workspace name 值
   * @description 工作区名称。
   */
  workspace_name: string;
}

/**
 * @title botUserObjectResponse 数据结构
 * @description bot User Object Response 字段。
 */
export type botUserObjectResponse = {
  /**
   * @title bot 值
   * @description 连接（机器人）资料。
   */
  bot: any;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title breadcrumbBlockObjectResponse 数据结构
 * @description breadcrumb Block Object Response 字段。
 */
export type breadcrumbBlockObjectResponse = {
  breadcrumb: emptyObject;
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title bulletedListItemBlockObjectResponse 数据结构
 * @description bulleted List Item Block Object Response 字段。
 */
export type bulletedListItemBlockObjectResponse = {
  bulleted_list_item: contentWithRichTextAndColorResponse;
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title buttonPropertyConfigurationRequest 数据结构
 * @description button Property Configuration Request 字段。
 */
export type buttonPropertyConfigurationRequest = {
  button: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title buttonPropertyItemObjectResponse 数据结构
 * @description button Property Item Object Response 字段。
 */
export type buttonPropertyItemObjectResponse = {
  button: emptyObject;
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title buttonSimplePropertyValueResponse 数据结构
 * @description button Simple Property Value Response 字段。
 */
export type buttonSimplePropertyValueResponse = {
  button: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title calendarViewConfigRequest 数据结构
 * @description calendar View Config Request 字段。
 */
export type calendarViewConfigRequest = {
  /**
   * @title date property id 值
   * @description date property id 字段。
   */
  date_property_id: string;
  /**
   * @title properties 值
   * @description 页面属性值或数据源属性模式。
   */
  properties?: Array<viewPropertyConfigRequest>;
  /**
   * @title show weekends 值
   * @description show weekends 字段。
   */
  show_weekends?: boolean;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
  /**
   * @title view range 值
   * @description view range 字段。
   */
  view_range?: 'week' | 'month';
}

/**
 * @title calendarViewConfigResponse 数据结构
 * @description calendar View Config Response 字段。
 */
export type calendarViewConfigResponse = {
  /**
   * @title date property id 值
   * @description date property id 字段。
   */
  date_property_id: string;
  /**
   * @title date property name 值
   * @description date property name 字段。
   */
  date_property_name?: string;
  /**
   * @title properties 值
   * @description 页面属性值或数据源属性模式。
   */
  properties?: Array<viewPropertyConfigResponse>;
  /**
   * @title show weekends 值
   * @description show weekends 字段。
   */
  show_weekends?: boolean;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
  /**
   * @title view range 值
   * @description view range 字段。
   */
  view_range?: 'week' | 'month';
}

/**
 * @title calloutBlockObjectResponse 数据结构
 * @description callout Block Object Response 字段。
 */
export type calloutBlockObjectResponse = {
  /**
   * @title callout 值
   * @description callout 字段。
   */
  callout: {
    color: apiColor;
    /**
     * @title icon 值
     * @description 资源图标。
     */
    icon: any;
    /**
     * @title rich text 值
     * @description 富文本项列表。
     */
    rich_text: Array<richTextItemResponse>
  };
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title chartAggregationRequest 数据结构
 * @description chart Aggregation Request 字段。
 */
export type chartAggregationRequest = {
  /**
   * @title aggregator 值
   * @description aggregator 字段。
   */
  aggregator: 'count' | 'count_values' | 'sum' | 'average' | 'median' | 'min' | 'max' | 'range' | 'unique' | 'empty' | 'not_empty' | 'percent_empty' | 'percent_not_empty' | 'checked' | 'unchecked' | 'percent_checked' | 'percent_unchecked' | 'earliest_date' | 'latest_date' | 'date_range';
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id?: string;
}

/**
 * @title chartAggregationResponse 数据结构
 * @description chart Aggregation Response 字段。
 */
export type chartAggregationResponse = {
  /**
   * @title aggregator 值
   * @description aggregator 字段。
   */
  aggregator: 'count' | 'count_values' | 'sum' | 'average' | 'median' | 'min' | 'max' | 'range' | 'unique' | 'empty' | 'not_empty' | 'percent_empty' | 'percent_not_empty' | 'checked' | 'unchecked' | 'percent_checked' | 'percent_unchecked' | 'earliest_date' | 'latest_date' | 'date_range';
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id?: string;
}

/**
 * @title chartReferenceLineRequest 数据结构
 * @description chart Reference Line Request 字段。
 */
export type chartReferenceLineRequest = {
  /**
   * @title color 值
   * @description 颜色。
   */
  color: 'gray' | 'lightgray' | 'brown' | 'yellow' | 'orange' | 'green' | 'blue' | 'purple' | 'pink' | 'red';
  /**
   * @title dash style 值
   * @description dash style 字段。
   */
  dash_style: 'solid' | 'dash';
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id?: string;
  /**
   * @title label 值
   * @description label 字段。
   */
  label: string;
  /**
   * @title value 值
   * @description 属性值。
   */
  value: number;
}

/**
 * @title chartReferenceLineResponse 数据结构
 * @description chart Reference Line Response 字段。
 */
export type chartReferenceLineResponse = {
  /**
   * @title color 值
   * @description 颜色。
   */
  color: 'gray' | 'lightgray' | 'brown' | 'yellow' | 'orange' | 'green' | 'blue' | 'purple' | 'pink' | 'red';
  /**
   * @title dash style 值
   * @description dash style 字段。
   */
  dash_style: 'solid' | 'dash';
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title label 值
   * @description label 字段。
   */
  label: string;
  /**
   * @title value 值
   * @description 属性值。
   */
  value: number;
}

/**
 * @title chartViewConfigRequest 数据结构
 * @description chart View Config Request 字段。
 */
export type chartViewConfigRequest = {
  /**
   * @title axis labels 值
   * @description axis labels 字段。
   */
  axis_labels?: 'none' | 'x_axis' | 'y_axis' | 'both';
  /**
   * @title caption 值
   * @description caption 字段。
   */
  caption?: string;
  /**
   * @title chart type 值
   * @description chart type 字段。
   */
  chart_type: 'column' | 'bar' | 'line' | 'donut' | 'number';
  /**
   * @title color by value 值
   * @description color by value 字段。
   */
  color_by_value?: boolean;
  /**
   * @title color theme 值
   * @description color theme 字段。
   */
  color_theme?: 'gray' | 'blue' | 'yellow' | 'green' | 'purple' | 'teal' | 'orange' | 'pink' | 'red' | 'auto' | 'colorful';
  /**
   * @title cumulative 值
   * @description cumulative 字段。
   */
  cumulative?: boolean;
  /**
   * @title donut labels 值
   * @description donut labels 字段。
   */
  donut_labels?: 'none' | 'value' | 'name' | 'name_and_value';
  /**
   * @title grid lines 值
   * @description grid lines 字段。
   */
  grid_lines?: 'none' | 'horizontal' | 'vertical' | 'both';
  /**
   * @title group style 值
   * @description group style 字段。
   */
  group_style?: 'normal' | 'percent' | 'side_by_side';
  /**
   * @title height 值
   * @description height 字段。
   */
  height?: 'small' | 'medium' | 'large' | 'extra_large';
  /**
   * @title hide empty groups 值
   * @description hide empty groups 字段。
   */
  hide_empty_groups?: boolean;
  /**
   * @title hide line fill area 值
   * @description hide line fill area 字段。
   */
  hide_line_fill_area?: boolean;
  /**
   * @title hide title 值
   * @description hide title 字段。
   */
  hide_title?: boolean;
  /**
   * @title legend position 值
   * @description legend position 字段。
   */
  legend_position?: 'off' | 'bottom' | 'side';
  /**
   * @title reference lines 值
   * @description reference lines 字段。
   */
  reference_lines?: Array<chartReferenceLineRequest>;
  /**
   * @title show data labels 值
   * @description show data labels 字段。
   */
  show_data_labels?: boolean;
  /**
   * @title smooth line 值
   * @description smooth line 字段。
   */
  smooth_line?: boolean;
  /**
   * @title sort 值
   * @description 排序条件。
   */
  sort?: 'manual' | 'x_ascending' | 'x_descending' | 'y_ascending' | 'y_descending';
  /**
   * @title stack by 值
   * @description stack by 字段。
   */
  stack_by?: any;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
  /**
   * @title value 值
   * @description 属性值。
   */
  value?: any;
  /**
   * @title x axis 值
   * @description x axis 字段。
   */
  x_axis?: any;
  /**
   * @title x axis property id 值
   * @description x axis property id 字段。
   */
  x_axis_property_id?: string;
  /**
   * @title y axis 值
   * @description y axis 字段。
   */
  y_axis?: any;
  /**
   * @title y axis max 值
   * @description y axis max 字段。
   */
  y_axis_max?: number;
  /**
   * @title y axis min 值
   * @description y axis min 字段。
   */
  y_axis_min?: number;
  /**
   * @title y axis property id 值
   * @description y axis property id 字段。
   */
  y_axis_property_id?: string;
}

/**
 * @title chartViewConfigResponse 数据结构
 * @description chart View Config Response 字段。
 */
export type chartViewConfigResponse = {
  /**
   * @title axis labels 值
   * @description axis labels 字段。
   */
  axis_labels?: 'none' | 'x_axis' | 'y_axis' | 'both';
  /**
   * @title caption 值
   * @description caption 字段。
   */
  caption?: string;
  /**
   * @title chart type 值
   * @description chart type 字段。
   */
  chart_type: 'column' | 'bar' | 'line' | 'donut' | 'number';
  /**
   * @title color by value 值
   * @description color by value 字段。
   */
  color_by_value?: boolean;
  /**
   * @title color theme 值
   * @description color theme 字段。
   */
  color_theme?: 'gray' | 'blue' | 'yellow' | 'green' | 'purple' | 'teal' | 'orange' | 'pink' | 'red' | 'auto' | 'colorful';
  /**
   * @title cumulative 值
   * @description cumulative 字段。
   */
  cumulative?: boolean;
  /**
   * @title donut labels 值
   * @description donut labels 字段。
   */
  donut_labels?: 'none' | 'value' | 'name' | 'name_and_value';
  /**
   * @title grid lines 值
   * @description grid lines 字段。
   */
  grid_lines?: 'none' | 'horizontal' | 'vertical' | 'both';
  /**
   * @title group style 值
   * @description group style 字段。
   */
  group_style?: 'normal' | 'percent' | 'side_by_side';
  /**
   * @title height 值
   * @description height 字段。
   */
  height?: 'small' | 'medium' | 'large' | 'extra_large';
  /**
   * @title hide empty groups 值
   * @description hide empty groups 字段。
   */
  hide_empty_groups?: boolean;
  /**
   * @title hide line fill area 值
   * @description hide line fill area 字段。
   */
  hide_line_fill_area?: boolean;
  /**
   * @title hide title 值
   * @description hide title 字段。
   */
  hide_title?: boolean;
  /**
   * @title legend position 值
   * @description legend position 字段。
   */
  legend_position?: 'off' | 'bottom' | 'side';
  /**
   * @title reference lines 值
   * @description reference lines 字段。
   */
  reference_lines?: Array<chartReferenceLineResponse>;
  /**
   * @title show data labels 值
   * @description show data labels 字段。
   */
  show_data_labels?: boolean;
  /**
   * @title smooth line 值
   * @description smooth line 字段。
   */
  smooth_line?: boolean;
  /**
   * @title sort 值
   * @description 排序条件。
   */
  sort?: 'manual' | 'x_ascending' | 'x_descending' | 'y_ascending' | 'y_descending';
  /**
   * @title stack by 值
   * @description stack by 字段。
   */
  stack_by?: any;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
  value?: chartAggregationResponse;
  /**
   * @title x axis 值
   * @description x axis 字段。
   */
  x_axis?: any;
  /**
   * @title x axis property id 值
   * @description x axis property id 字段。
   */
  x_axis_property_id?: string;
  /**
   * @title y axis 值
   * @description y axis 字段。
   */
  y_axis?: any;
  /**
   * @title y axis max 值
   * @description y axis max 字段。
   */
  y_axis_max?: number;
  /**
   * @title y axis min 值
   * @description y axis min 字段。
   */
  y_axis_min?: number;
  /**
   * @title y axis property id 值
   * @description y axis property id 字段。
   */
  y_axis_property_id?: string;
}

/**
 * @title checkboxDatabasePropertyConfigResponse 数据结构
 * @description checkbox Database Property Config Response 字段。
 */
export type checkboxDatabasePropertyConfigResponse = {
  checkbox: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title checkboxGroupByConfigRequest 数据结构
 * @description checkbox Group By Config Request 字段。
 */
export type checkboxGroupByConfigRequest = {
  /**
   * @title hide empty groups 值
   * @description hide empty groups 字段。
   */
  hide_empty_groups?: boolean;
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id: string;
  sort: groupSortRequest;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title checkboxGroupByConfigResponse 数据结构
 * @description checkbox Group By Config Response 字段。
 */
export type checkboxGroupByConfigResponse = {
  /**
   * @title hide empty groups 值
   * @description hide empty groups 字段。
   */
  hide_empty_groups?: boolean;
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id: string;
  /**
   * @title property name 值
   * @description property name 字段。
   */
  property_name?: string;
  sort: groupSortResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title checkboxPropertyConfigurationRequest 数据结构
 * @description checkbox Property Configuration Request 字段。
 */
export type checkboxPropertyConfigurationRequest = {
  checkbox: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title checkboxPropertyFilter 数据结构
 * @description checkbox Property Filter 字段。
 */
export type checkboxPropertyFilter = any

/**
 * @title checkboxPropertyItemObjectResponse 数据结构
 * @description checkbox Property Item Object Response 字段。
 */
export type checkboxPropertyItemObjectResponse = {
  /**
   * @title checkbox 值
   * @description 复选框值。
   */
  checkbox: boolean;
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title checkboxSimplePropertyValueResponse 数据结构
 * @description checkbox Simple Property Value Response 字段。
 */
export type checkboxSimplePropertyValueResponse = {
  /**
   * @title checkbox 值
   * @description 复选框值。
   */
  checkbox: boolean;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title childDatabaseBlockObjectResponse 数据结构
 * @description child Database Block Object Response 字段。
 */
export type childDatabaseBlockObjectResponse = {
  child_database: titleObjectResponse;
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title childPageBlockObjectResponse 数据结构
 * @description child Page Block Object Response 字段。
 */
export type childPageBlockObjectResponse = {
  child_page: titleObjectResponse;
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title codeBlockObjectResponse 数据结构
 * @description code Block Object Response 字段。
 */
export type codeBlockObjectResponse = {
  /**
   * @title code 值
   * @description 错误代码。
   */
  code: {
    /**
     * @title caption 值
     * @description caption 字段。
     */
    caption: Array<richTextItemResponse>;
    language: languageRequest;
    /**
     * @title rich text 值
     * @description 富文本项列表。
     */
    rich_text: Array<richTextItemResponse>
  };
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title columnBlockObjectResponse 数据结构
 * @description column Block Object Response 字段。
 */
export type columnBlockObjectResponse = {
  column: columnResponse;
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title columnBlockWithChildrenRequest 数据结构
 * @description column Block With Children Request 字段。
 */
export type columnBlockWithChildrenRequest = {
  column: columnWithChildrenRequest;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object?: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title columnListBlockObjectResponse 数据结构
 * @description column List Block Object Response 字段。
 */
export type columnListBlockObjectResponse = {
  column_list: emptyObject;
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title columnListRequest 数据结构
 * @description column List Request 字段。
 */
export type columnListRequest = {
  /**
   * @title children 值
   * @description 子块列表。
   */
  children: Array<columnBlockWithChildrenRequest>;
}

/**
 * @title columnResponse 数据结构
 * @description column Response 字段。
 */
export type columnResponse = {
  /**
   * @title width ratio 值
   * @description width ratio 字段。
   */
  width_ratio?: number;
}

/**
 * @title columnWithChildrenRequest 数据结构
 * @description column With Children Request 字段。
 */
export type columnWithChildrenRequest = {
  /**
   * @title children 值
   * @description 子块列表。
   */
  children: Array<blockObjectWithSingleLevelOfChildrenRequest>;
  /**
   * @title width ratio 值
   * @description width ratio 字段。
   */
  width_ratio?: number;
}

/**
 * @title commentCreatedWebhookPayload 数据结构
 * @description comment Created Webhook Payload 字段。
 */
export type commentCreatedWebhookPayload = any

/**
 * @title commentDeletedWebhookPayload 数据结构
 * @description comment Deleted Webhook Payload 字段。
 */
export type commentDeletedWebhookPayload = any

/**
 * @title commentObjectResponse 数据结构
 * @description 评论对象响应。
 */
export type commentObjectResponse = {
  /**
   * @title attachments 值
   * @description attachments 字段。
   */
  attachments?: Array<{
    /**
     * @title category 值
     * @description category 字段。
     */
    category: 'audio' | 'image' | 'pdf' | 'productivity' | 'video';
    file: internalFileResponse
  }>;
  created_by: partialUserObjectResponse;
  /**
   * @title created time 值
   * @description 创建时间（ISO 8601）。
   */
  created_time: string;
  discussion_id: idResponse;
  /**
   * @title display name 值
   * @description display name 字段。
   */
  display_name: {
    /**
     * @title resolved name 值
     * @description resolved name 字段。
     */
    resolved_name: string;
    /**
     * @title type 值
     * @description 对象或块类型。
     */
    type: 'custom' | 'user' | 'integration'
  };
  id: idResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title original content deleted 值
   * @description original content deleted 字段。
   */
  original_content_deleted: boolean;
  parent: commentParentResponse;
  /**
   * @title rich text 值
   * @description 富文本项列表。
   */
  rich_text: Array<richTextItemResponse>;
}

/**
 * @title commentParentResponse 数据结构
 * @description comment Parent Response 字段。
 */
export type commentParentResponse = any

/**
 * @title commentUpdatedWebhookPayload 数据结构
 * @description comment Updated Webhook Payload 字段。
 */
export type commentUpdatedWebhookPayload = any

/**
 * @title contentPositionSchema 数据结构
 * @description content Position Schema 字段。
 */
export type contentPositionSchema = any

/**
 * @title contentWithExpressionRequest 数据结构
 * @description content With Expression Request 字段。
 */
export type contentWithExpressionRequest = {
  /**
   * @title expression 值
   * @description expression 字段。
   */
  expression: string;
}

/**
 * @title contentWithRichTextAndColorAndListResponse 数据结构
 * @description content With Rich Text And Color And List Response 字段。
 */
export type contentWithRichTextAndColorAndListResponse = {
  color: apiColor;
  list_format?: numberedListFormat;
  /**
   * @title list start index 值
   * @description list start index 字段。
   */
  list_start_index?: number;
  /**
   * @title rich text 值
   * @description 富文本项列表。
   */
  rich_text: Array<richTextItemResponse>;
}

/**
 * @title contentWithRichTextAndColorRequest 数据结构
 * @description content With Rich Text And Color Request 字段。
 */
export type contentWithRichTextAndColorRequest = {
  color?: apiColor;
  /**
   * @title rich text 值
   * @description 富文本项列表。
   */
  rich_text: Array<richTextItemRequest>;
}

/**
 * @title contentWithRichTextAndColorResponse 数据结构
 * @description content With Rich Text And Color Response 字段。
 */
export type contentWithRichTextAndColorResponse = {
  color: apiColor;
  /**
   * @title rich text 值
   * @description 富文本项列表。
   */
  rich_text: Array<richTextItemResponse>;
}

/**
 * @title contentWithRichTextColorAndIconRequest 数据结构
 * @description content With Rich Text Color And Icon Request 字段。
 */
export type contentWithRichTextColorAndIconRequest = {
  color?: apiColor;
  icon?: pageIconRequest;
  /**
   * @title rich text 值
   * @description 富文本项列表。
   */
  rich_text: Array<richTextItemRequest>;
}

/**
 * @title contentWithRichTextColorAndIconResponse 数据结构
 * @description content With Rich Text Color And Icon Response 字段。
 */
export type contentWithRichTextColorAndIconResponse = {
  color: apiColor;
  /**
   * @title icon 值
   * @description 资源图标。
   */
  icon: any;
  /**
   * @title rich text 值
   * @description 富文本项列表。
   */
  rich_text: Array<richTextItemResponse>;
}

/**
 * @title contentWithRichTextColorAndIconUpdateRequest 数据结构
 * @description content With Rich Text Color And Icon Update Request 字段。
 */
export type contentWithRichTextColorAndIconUpdateRequest = {
  color?: apiColor;
  icon?: pageIconRequest;
  /**
   * @title rich text 值
   * @description 富文本项列表。
   */
  rich_text?: Array<richTextItemRequest>;
}

/**
 * @title contentWithRichTextRequest 数据结构
 * @description content With Rich Text Request 字段。
 */
export type contentWithRichTextRequest = {
  /**
   * @title rich text 值
   * @description 富文本项列表。
   */
  rich_text: Array<richTextItemRequest>;
}

/**
 * @title contentWithSingleLevelOfChildrenRequest 数据结构
 * @description content With Single Level Of Children Request 字段。
 */
export type contentWithSingleLevelOfChildrenRequest = {
  /**
   * @title children 值
   * @description 子块列表。
   */
  children?: Array<blockObjectRequestWithoutChildren>;
  color?: apiColor;
  /**
   * @title rich text 值
   * @description 富文本项列表。
   */
  rich_text: Array<richTextItemRequest>;
}

/**
 * @title contentWithTableResponse 数据结构
 * @description content With Table Response 字段。
 */
export type contentWithTableResponse = {
  /**
   * @title has column header 值
   * @description has column header 字段。
   */
  has_column_header: boolean;
  /**
   * @title has row header 值
   * @description has row header 字段。
   */
  has_row_header: boolean;
  /**
   * @title table width 值
   * @description table width 字段。
   */
  table_width: number;
}

/**
 * @title contentWithTableRowRequest 数据结构
 * @description content With Table Row Request 字段。
 */
export type contentWithTableRowRequest = {
  /**
   * @title cells 值
   * @description cells 字段。
   */
  cells: Array<Array<richTextItemRequest>>;
}

/**
 * @title contentWithTableRowResponse 数据结构
 * @description content With Table Row Response 字段。
 */
export type contentWithTableRowResponse = {
  /**
   * @title cells 值
   * @description cells 字段。
   */
  cells: Array<Array<richTextItemResponse>>;
}

/**
 * @title coverConfigRequest 数据结构
 * @description cover Config Request 字段。
 */
export type coverConfigRequest = {
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id?: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: 'page_cover' | 'page_content' | 'property';
}

/**
 * @title coverConfigResponse 数据结构
 * @description cover Config Response 字段。
 */
export type coverConfigResponse = {
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id?: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: 'page_cover' | 'page_content' | 'page_content_first' | 'property';
}

/**
 * @title createDatabaseForViewRequest 数据结构
 * @description create Database For View Request 字段。
 */
export type createDatabaseForViewRequest = {
  /**
   * @title parent 值
   * @description 父级对象。
   */
  parent: {
    page_id: idRequest;
    /**
     * @title type 值
     * @description 对象或块类型。
     */
    type: string
  };
  /**
   * @title position 值
   * @description position 字段。
   */
  position?: {
    block_id: idRequest;
    /**
     * @title type 值
     * @description 对象或块类型。
     */
    type: string
  };
}

/**
 * @title createViewQueryRequest 数据结构
 * @description 创建视图查询请求。
 */
export type createViewQueryRequest = {
  /**
   * @title page size 值
   * @description 每页返回条数。
   */
  page_size?: number;
}

/**
 * @title createViewRequest 数据结构
 * @description 创建视图请求。
 */
export type createViewRequest = {
  configuration?: viewConfigRequest;
  create_database?: createDatabaseForViewRequest;
  data_source_id: idRequest;
  database_id?: idRequest;
  filter?: viewFilterRequest;
  /**
   * @title name 值
   * @description 名称。
   */
  name: string;
  placement?: widgetPlacementRequest;
  position?: viewPositionRequest;
  /**
   * @title quick filters 值
   * @description quick filters 字段。
   */
  quick_filters?: Record<any, quickFilterConditionRequest>;
  sorts?: viewSortsRequest;
  type: viewTypeRequest;
  view_id?: idRequest;
}

/**
 * @title createdByDatabasePropertyConfigResponse 数据结构
 * @description created By Database Property Config Response 字段。
 */
export type createdByDatabasePropertyConfigResponse = {
  created_by: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title createdByPropertyConfigurationRequest 数据结构
 * @description created By Property Configuration Request 字段。
 */
export type createdByPropertyConfigurationRequest = {
  created_by: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title createdByPropertyItemObjectResponse 数据结构
 * @description created By Property Item Object Response 字段。
 */
export type createdByPropertyItemObjectResponse = {
  /**
   * @title created by 值
   * @description 创建者。
   */
  created_by: any;
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title createdBySimplePropertyValueResponse 数据结构
 * @description created By Simple Property Value Response 字段。
 */
export type createdBySimplePropertyValueResponse = {
  created_by: userValueResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title createdTimeDatabasePropertyConfigResponse 数据结构
 * @description created Time Database Property Config Response 字段。
 */
export type createdTimeDatabasePropertyConfigResponse = {
  created_time: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title createdTimePropertyConfigurationRequest 数据结构
 * @description created Time Property Configuration Request 字段。
 */
export type createdTimePropertyConfigurationRequest = {
  created_time: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title createdTimePropertyItemObjectResponse 数据结构
 * @description created Time Property Item Object Response 字段。
 */
export type createdTimePropertyItemObjectResponse = {
  /**
   * @title created time 值
   * @description 创建时间（ISO 8601）。
   */
  created_time: string;
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title createdTimeSimplePropertyValueResponse 数据结构
 * @description created Time Simple Property Value Response 字段。
 */
export type createdTimeSimplePropertyValueResponse = {
  /**
   * @title created time 值
   * @description 创建时间（ISO 8601）。
   */
  created_time: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title customEmojiPageIconRequest 数据结构
 * @description custom Emoji Page Icon Request 字段。
 */
export type customEmojiPageIconRequest = {
  /**
   * @title custom emoji 值
   * @description custom emoji 字段。
   */
  custom_emoji: {
    id: idRequest;
    /**
     * @title name 值
     * @description 名称。
     */
    name?: string;
    /**
     * @title url 值
     * @description 资源在 Notion 中的打开链接。
     */
    url?: string
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title customEmojiPageIconResponse 数据结构
 * @description custom Emoji Page Icon Response 字段。
 */
export type customEmojiPageIconResponse = {
  custom_emoji: customEmojiResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title customEmojiResponse 数据结构
 * @description custom Emoji Response 字段。
 */
export type customEmojiResponse = {
  id: idResponse;
  /**
   * @title name 值
   * @description 名称。
   */
  name: string;
  /**
   * @title url 值
   * @description 资源在 Notion 中的打开链接。
   */
  url: string;
}

/**
 * @title dashboardRowResponse 数据结构
 * @description dashboard Row Response 字段。
 */
export type dashboardRowResponse = {
  /**
   * @title height 值
   * @description height 字段。
   */
  height?: number;
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title widgets 值
   * @description widgets 字段。
   */
  widgets: Array<dashboardWidgetResponse>;
}

/**
 * @title dashboardViewConfigResponse 数据结构
 * @description dashboard View Config Response 字段。
 */
export type dashboardViewConfigResponse = {
  /**
   * @title rows 值
   * @description rows 字段。
   */
  rows: Array<dashboardRowResponse>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title dashboardWidgetResponse 数据结构
 * @description dashboard Widget Response 字段。
 */
export type dashboardWidgetResponse = {
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title row index 值
   * @description row index 字段。
   */
  row_index?: number;
  /**
   * @title view id 值
   * @description 视图 ID。
   */
  view_id: string;
  /**
   * @title width 值
   * @description width 字段。
   */
  width?: number;
}

/**
 * @title dataSourceContentUpdatedWebhookPayload 数据结构
 * @description data Source Content Updated Webhook Payload 字段。
 */
export type dataSourceContentUpdatedWebhookPayload = any

/**
 * @title dataSourceCreatedWebhookPayload 数据结构
 * @description data Source Created Webhook Payload 字段。
 */
export type dataSourceCreatedWebhookPayload = any

/**
 * @title dataSourceDeletedWebhookPayload 数据结构
 * @description data Source Deleted Webhook Payload 字段。
 */
export type dataSourceDeletedWebhookPayload = any

/**
 * @title dataSourceMovedWebhookPayload 数据结构
 * @description data Source Moved Webhook Payload 字段。
 */
export type dataSourceMovedWebhookPayload = any

/**
 * @title dataSourceObjectResponse 数据结构
 * @description 数据源对象响应。
 */
export type dataSourceObjectResponse = {
  /**
   * @title cover 值
   * @description 资源封面。
   */
  cover: any;
  created_by: partialUserObjectResponse;
  /**
   * @title created time 值
   * @description 创建时间（ISO 8601）。
   */
  created_time: string;
  database_parent: parentOfDatabaseResponse;
  /**
   * @title description 值
   * @description 资源说明。
   */
  description: Array<richTextItemResponse>;
  /**
   * @title icon 值
   * @description 资源图标。
   */
  icon: any;
  id: idResponse;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  /**
   * @title is inline 值
   * @description is inline 字段。
   */
  is_inline: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentOfDataSourceResponse;
  /**
   * @title properties 值
   * @description 页面属性值或数据源属性模式。
   */
  properties: Record<any, databasePropertyConfigResponse>;
  /**
   * @title public url 值
   * @description 公开访问链接。
   */
  public_url: string;
  /**
   * @title title 值
   * @description 资源标题。
   */
  title: Array<richTextItemResponse>;
  /**
   * @title url 值
   * @description 资源在 Notion 中的打开链接。
   */
  url: string;
}

/**
 * @title dataSourceParentResponse 数据结构
 * @description data Source Parent Response 字段。
 */
export type dataSourceParentResponse = {
  data_source_id: idResponse;
  database_id: idResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title dataSourceReferenceResponse 数据结构
 * @description data Source Reference Response 字段。
 */
export type dataSourceReferenceResponse = {
  id: idResponse;
  /**
   * @title name 值
   * @description 名称。
   */
  name: string;
}

/**
 * @title dataSourceSchemaUpdatedWebhookPayload 数据结构
 * @description data Source Schema Updated Webhook Payload 字段。
 */
export type dataSourceSchemaUpdatedWebhookPayload = any

/**
 * @title dataSourceUndeletedWebhookPayload 数据结构
 * @description data Source Undeleted Webhook Payload 字段。
 */
export type dataSourceUndeletedWebhookPayload = any

/**
 * @title dataSourceViewObjectResponse 数据结构
 * @description data Source View Object Response 字段。
 */
export type dataSourceViewObjectResponse = {
  /**
   * @title configuration 值
   * @description configuration 字段。
   */
  configuration?: any;
  /**
   * @title created by 值
   * @description 创建者。
   */
  created_by?: any;
  /**
   * @title created time 值
   * @description 创建时间（ISO 8601）。
   */
  created_time: string;
  /**
   * @title dashboard view id 值
   * @description dashboard view id 字段。
   */
  dashboard_view_id?: string;
  /**
   * @title data source id 值
   * @description 数据源 ID。
   */
  data_source_id?: string;
  /**
   * @title filter 值
   * @description 过滤条件。
   */
  filter?: any;
  id: idResponse;
  /**
   * @title last edited by 值
   * @description 最后编辑者。
   */
  last_edited_by?: any;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title name 值
   * @description 名称。
   */
  name: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: databaseParentResponse;
  /**
   * @title quick filters 值
   * @description quick filters 字段。
   */
  quick_filters?: Record<any, quickFilterConditionResponse>;
  /**
   * @title sorts 值
   * @description sorts 字段。
   */
  sorts?: Array<viewSortResponse>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: 'table' | 'board' | 'list' | 'calendar' | 'timeline' | 'gallery' | 'form' | 'chart' | 'map' | 'dashboard';
  /**
   * @title url 值
   * @description 资源在 Notion 中的打开链接。
   */
  url: string;
}

/**
 * @title dataSourceViewReferenceResponse 数据结构
 * @description data Source View Reference Response 字段。
 */
export type dataSourceViewReferenceResponse = {
  id: idResponse;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
}

/**
 * @title databaseContentUpdatedWebhookPayload 数据结构
 * @description database Content Updated Webhook Payload 字段。
 */
export type databaseContentUpdatedWebhookPayload = any

/**
 * @title databaseCreatedWebhookPayload 数据结构
 * @description database Created Webhook Payload 字段。
 */
export type databaseCreatedWebhookPayload = any

/**
 * @title databaseDeletedWebhookPayload 数据结构
 * @description database Deleted Webhook Payload 字段。
 */
export type databaseDeletedWebhookPayload = any

/**
 * @title databaseMovedWebhookPayload 数据结构
 * @description database Moved Webhook Payload 字段。
 */
export type databaseMovedWebhookPayload = any

/**
 * @title databaseObjectResponse 数据结构
 * @description 数据库对象响应。
 */
export type databaseObjectResponse = {
  /**
   * @title cover 值
   * @description 资源封面。
   */
  cover: any;
  /**
   * @title created time 值
   * @description 创建时间（ISO 8601）。
   */
  created_time: string;
  /**
   * @title data sources 值
   * @description data sources 字段。
   */
  data_sources: Array<dataSourceReferenceResponse>;
  /**
   * @title description 值
   * @description 资源说明。
   */
  description: Array<richTextItemResponse>;
  /**
   * @title icon 值
   * @description 资源图标。
   */
  icon: any;
  id: idResponse;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  /**
   * @title is inline 值
   * @description is inline 字段。
   */
  is_inline: boolean;
  /**
   * @title is locked 值
   * @description is locked 字段。
   */
  is_locked: boolean;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentOfDatabaseResponse;
  /**
   * @title public url 值
   * @description 公开访问链接。
   */
  public_url: string;
  /**
   * @title title 值
   * @description 资源标题。
   */
  title: Array<richTextItemResponse>;
  /**
   * @title url 值
   * @description 资源在 Notion 中的打开链接。
   */
  url: string;
}

/**
 * @title databaseParentResponse 数据结构
 * @description database Parent Response 字段。
 */
export type databaseParentResponse = {
  database_id: idResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title databasePropertyConfigResponse 数据结构
 * @description database Property Config Response 字段。
 */
export type databasePropertyConfigResponse = any

/**
 * @title databasePropertyConfigResponseCommon 数据结构
 * @description database Property Config Response Common 字段。
 */
export type databasePropertyConfigResponseCommon = {
  /**
   * @title description 值
   * @description 资源说明。
   */
  description: any;
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title name 值
   * @description 名称。
   */
  name: string;
}

/**
 * @title databasePropertyRelationConfigResponse 数据结构
 * @description database Property Relation Config Response 字段。
 */
export type databasePropertyRelationConfigResponse = any

/**
 * @title databasePropertyRelationConfigResponseCommon 数据结构
 * @description database Property Relation Config Response Common 字段。
 */
export type databasePropertyRelationConfigResponseCommon = {
  data_source_id: idResponse;
  database_id: idResponse;
}

/**
 * @title databaseSchemaUpdatedWebhookPayload 数据结构
 * @description database Schema Updated Webhook Payload 字段。
 */
export type databaseSchemaUpdatedWebhookPayload = any

/**
 * @title databaseUndeletedWebhookPayload 数据结构
 * @description database Undeleted Webhook Payload 字段。
 */
export type databaseUndeletedWebhookPayload = any

/**
 * @title dateDatabasePropertyConfigResponse 数据结构
 * @description date Database Property Config Response 字段。
 */
export type dateDatabasePropertyConfigResponse = {
  date: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title dateFormulaPropertyResponse 数据结构
 * @description date Formula Property Response 字段。
 */
export type dateFormulaPropertyResponse = {
  /**
   * @title date 值
   * @description 日期或时间。
   */
  date: any;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title dateFormulaPropertyValueResponse 数据结构
 * @description date Formula Property Value Response 字段。
 */
export type dateFormulaPropertyValueResponse = {
  /**
   * @title date 值
   * @description 日期或时间。
   */
  date: any;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title dateGroupByConfigRequest 数据结构
 * @description date Group By Config Request 字段。
 */
export type dateGroupByConfigRequest = {
  /**
   * @title group by 值
   * @description group by 字段。
   */
  group_by: 'relative' | 'day' | 'week' | 'month' | 'year';
  /**
   * @title hide empty groups 值
   * @description hide empty groups 字段。
   */
  hide_empty_groups?: boolean;
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id: string;
  sort: groupSortRequest;
  /**
   * @title start day of week 值
   * @description start day of week 字段。
   */
  start_day_of_week?: 0 | 1;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: 'date' | 'created_time' | 'last_edited_time';
}

/**
 * @title dateGroupByConfigResponse 数据结构
 * @description date Group By Config Response 字段。
 */
export type dateGroupByConfigResponse = {
  /**
   * @title group by 值
   * @description group by 字段。
   */
  group_by: 'relative' | 'day' | 'week' | 'month' | 'year';
  /**
   * @title hide empty groups 值
   * @description hide empty groups 字段。
   */
  hide_empty_groups?: boolean;
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id: string;
  /**
   * @title property name 值
   * @description property name 字段。
   */
  property_name?: string;
  sort: groupSortResponse;
  /**
   * @title start day of week 值
   * @description start day of week 字段。
   */
  start_day_of_week?: 0 | 1;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: 'date' | 'created_time' | 'last_edited_time';
}

/**
 * @title dateOrRelativeDate 数据结构
 * @description date Or Relative Date 字段。
 */
export type dateOrRelativeDate = any

/**
 * @title datePartialRollupValueResponse 数据结构
 * @description date Partial Rollup Value Response 字段。
 */
export type datePartialRollupValueResponse = {
  /**
   * @title date 值
   * @description 日期或时间。
   */
  date: any;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title datePropertyConfigurationRequest 数据结构
 * @description date Property Configuration Request 字段。
 */
export type datePropertyConfigurationRequest = {
  date: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title datePropertyFilter 数据结构
 * @description date Property Filter 字段。
 */
export type datePropertyFilter = any

/**
 * @title datePropertyItemObjectResponse 数据结构
 * @description date Property Item Object Response 字段。
 */
export type datePropertyItemObjectResponse = {
  /**
   * @title date 值
   * @description 日期或时间。
   */
  date: any;
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title dateRequest 数据结构
 * @description date Request 字段。
 */
export type dateRequest = {
  /**
   * @title end 值
   * @description 时间范围结束。
   */
  end?: string;
  /**
   * @title start 值
   * @description 时间范围开始。
   */
  start: string;
  /**
   * @title time zone 值
   * @description 时区。
   */
  time_zone?: any;
}

/**
 * @title dateResponse 数据结构
 * @description date Response 字段。
 */
export type dateResponse = {
  /**
   * @title end 值
   * @description 时间范围结束。
   */
  end: string;
  /**
   * @title start 值
   * @description 时间范围开始。
   */
  start: string;
  /**
   * @title time zone 值
   * @description 时区。
   */
  time_zone: any;
}

/**
 * @title dateSimplePropertyValueResponse 数据结构
 * @description date Simple Property Value Response 字段。
 */
export type dateSimplePropertyValueResponse = {
  /**
   * @title date 值
   * @description 日期或时间。
   */
  date: any;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title deletedViewQueryResponse 数据结构
 * @description deleted View Query Response 字段。
 */
export type deletedViewQueryResponse = {
  /**
   * @title deleted 值
   * @description deleted 字段。
   */
  deleted: boolean;
  id: idResponse;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
}

/**
 * @title dividerBlockObjectResponse 数据结构
 * @description divider Block Object Response 字段。
 */
export type dividerBlockObjectResponse = {
  created_by: partialUserObjectResponse;
  /**
   * @title created time 值
   * @description 创建时间（ISO 8601）。
   */
  created_time: string;
  divider: emptyObject;
  /**
   * @title has children 值
   * @description has children 字段。
   */
  has_children: boolean;
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title dualPropertyDatabasePropertyRelationConfigResponse 数据结构
 * @description dual Property Database Property Relation Config Response 字段。
 */
export type dualPropertyDatabasePropertyRelationConfigResponse = {
  /**
   * @title dual property 值
   * @description dual property 字段。
   */
  dual_property: {
    /**
     * @title synced property id 值
     * @description synced property id 字段。
     */
    synced_property_id: string;
    /**
     * @title synced property name 值
     * @description synced property name 字段。
     */
    synced_property_name: string
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title emailDatabasePropertyConfigResponse 数据结构
 * @description email Database Property Config Response 字段。
 */
export type emailDatabasePropertyConfigResponse = {
  email: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title emailPropertyConfigurationRequest 数据结构
 * @description email Property Configuration Request 字段。
 */
export type emailPropertyConfigurationRequest = {
  email: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title emailPropertyItemObjectResponse 数据结构
 * @description email Property Item Object Response 字段。
 */
export type emailPropertyItemObjectResponse = {
  /**
   * @title email 值
   * @description 电子邮件地址。
   */
  email: string;
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title emailSimplePropertyValueResponse 数据结构
 * @description email Simple Property Value Response 字段。
 */
export type emailSimplePropertyValueResponse = {
  /**
   * @title email 值
   * @description 电子邮件地址。
   */
  email: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title embedBlockObjectResponse 数据结构
 * @description embed Block Object Response 字段。
 */
export type embedBlockObjectResponse = {
  created_by: partialUserObjectResponse;
  /**
   * @title created time 值
   * @description 创建时间（ISO 8601）。
   */
  created_time: string;
  embed: mediaContentWithUrlAndCaptionResponse;
  /**
   * @title has children 值
   * @description has children 字段。
   */
  has_children: boolean;
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title embedFileUploadRequest 数据结构
 * @description embed File Upload Request 字段。
 */
export type embedFileUploadRequest = {
  /**
   * @title caption 值
   * @description caption 字段。
   */
  caption?: Array<richTextItemRequest>;
  file_upload: fileUploadIdRequest;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title emojiPageIconRequest 数据结构
 * @description emoji Page Icon Request 字段。
 */
export type emojiPageIconRequest = {
  emoji: emojiRequest;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title emojiPageIconResponse 数据结构
 * @description emoji Page Icon Response 字段。
 */
export type emojiPageIconResponse = {
  emoji: emojiRequest;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title emojiRequest 数据结构
 * @description emoji Request 字段。
 */
export type emojiRequest = string

/**
 * @title emptyObject 数据结构
 * @description empty Object 字段。
 */
export type emptyObject = {

}

/**
 * @title equationBlockObjectResponse 数据结构
 * @description equation Block Object Response 字段。
 */
export type equationBlockObjectResponse = {
  created_by: partialUserObjectResponse;
  /**
   * @title created time 值
   * @description 创建时间（ISO 8601）。
   */
  created_time: string;
  equation: expressionObjectResponse;
  /**
   * @title has children 值
   * @description has children 字段。
   */
  has_children: boolean;
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title equationRichTextItemRequest 数据结构
 * @description equation Rich Text Item Request 字段。
 */
export type equationRichTextItemRequest = {
  /**
   * @title equation 值
   * @description 行内公式。
   */
  equation: {
    /**
     * @title expression 值
     * @description expression 字段。
     */
    expression: string
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title equationRichTextItemResponse 数据结构
 * @description equation Rich Text Item Response 字段。
 */
export type equationRichTextItemResponse = {
  /**
   * @title equation 值
   * @description 行内公式。
   */
  equation: {
    /**
     * @title expression 值
     * @description expression 字段。
     */
    expression: string
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title error_api_400 数据结构
 * @description 请求参数无效（400）。
 */
export type error_api_400 = any

/**
 * @title error_api_401 数据结构
 * @description 未认证或令牌无效（401）。
 */
export type error_api_401 = any

/**
 * @title error_api_403 数据结构
 * @description 无权限访问（403）。
 */
export type error_api_403 = any

/**
 * @title error_api_404 数据结构
 * @description 资源不存在（404）。
 */
export type error_api_404 = any

/**
 * @title error_api_406 数据结构
 * @description 请求无法按要求表示（406）。
 */
export type error_api_406 = any

/**
 * @title error_api_409 数据结构
 * @description 请求与当前状态冲突（409）。
 */
export type error_api_409 = any

/**
 * @title error_api_429 数据结构
 * @description 请求超限（429），请遵循 Retry-After。
 */
export type error_api_429 = any

/**
 * @title error_api_500 数据结构
 * @description 上游内部错误（500）。
 */
export type error_api_500 = any

/**
 * @title error_api_503 数据结构
 * @description 上游服务暂不可用（503）。
 */
export type error_api_503 = any

/**
 * @title error_api_504 数据结构
 * @description 上游网关超时（504）。
 */
export type error_api_504 = any

/**
 * @title error_api_529 数据结构
 * @description 上游过载（529），请与 429 相同方式重试。
 */
export type error_api_529 = any

/**
 * @title error_oauth_400 数据结构
 * @description OAuth 请求无效（400）。
 */
export type error_oauth_400 = any

/**
 * @title error_oauth_401 数据结构
 * @description OAuth 客户端凭据无效（401）。
 */
export type error_oauth_401 = any

/**
 * @title error_oauth_403 数据结构
 * @description OAuth 操作被拒绝（403）。
 */
export type error_oauth_403 = any

/**
 * @title error_oauth_500 数据结构
 * @description OAuth 上游内部错误（500）。
 */
export type error_oauth_500 = any

/**
 * @title existencePropertyFilter 数据结构
 * @description existence Property Filter 字段。
 */
export type existencePropertyFilter = any

/**
 * @title expressionObjectResponse 数据结构
 * @description expression Object Response 字段。
 */
export type expressionObjectResponse = {
  /**
   * @title expression 值
   * @description expression 字段。
   */
  expression: string;
}

/**
 * @title externalFileRequest 数据结构
 * @description external File Request 字段。
 */
export type externalFileRequest = {
  url: textRequest;
}

/**
 * @title externalInternalOrExternalFileWithNameResponse 数据结构
 * @description external Internal Or External File With Name Response 字段。
 */
export type externalInternalOrExternalFileWithNameResponse = {
  /**
   * @title external 值
   * @description external 字段。
   */
  external: {
    /**
     * @title url 值
     * @description 资源在 Notion 中的打开链接。
     */
    url: string
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title externalMediaContentWithFileAndCaptionResponse 数据结构
 * @description external Media Content With File And Caption Response 字段。
 */
export type externalMediaContentWithFileAndCaptionResponse = {
  /**
   * @title caption 值
   * @description caption 字段。
   */
  caption: Array<richTextItemResponse>;
  /**
   * @title external 值
   * @description external 字段。
   */
  external: {
    url: textRequest
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title externalMediaContentWithFileNameAndCaptionResponse 数据结构
 * @description external Media Content With File Name And Caption Response 字段。
 */
export type externalMediaContentWithFileNameAndCaptionResponse = {
  /**
   * @title caption 值
   * @description caption 字段。
   */
  caption: Array<richTextItemResponse>;
  /**
   * @title external 值
   * @description external 字段。
   */
  external: {
    url: textRequest
  };
  /**
   * @title name 值
   * @description 名称。
   */
  name: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title externalPageCoverRequest 数据结构
 * @description external Page Cover Request 字段。
 */
export type externalPageCoverRequest = {
  /**
   * @title external 值
   * @description external 字段。
   */
  external: {
    /**
     * @title url 值
     * @description 资源在 Notion 中的打开链接。
     */
    url: string
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title externalPageCoverResponse 数据结构
 * @description external Page Cover Response 字段。
 */
export type externalPageCoverResponse = {
  /**
   * @title external 值
   * @description external 字段。
   */
  external: {
    /**
     * @title url 值
     * @description 资源在 Notion 中的打开链接。
     */
    url: string
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title externalPageIconRequest 数据结构
 * @description external Page Icon Request 字段。
 */
export type externalPageIconRequest = {
  /**
   * @title external 值
   * @description external 字段。
   */
  external: {
    /**
     * @title url 值
     * @description 资源在 Notion 中的打开链接。
     */
    url: string
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title externalPageIconResponse 数据结构
 * @description external Page Icon Response 字段。
 */
export type externalPageIconResponse = {
  /**
   * @title external 值
   * @description external 字段。
   */
  external: {
    /**
     * @title url 值
     * @description 资源在 Notion 中的打开链接。
     */
    url: string
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title fileBlockObjectResponse 数据结构
 * @description file Block Object Response 字段。
 */
export type fileBlockObjectResponse = {
  created_by: partialUserObjectResponse;
  /**
   * @title created time 值
   * @description 创建时间（ISO 8601）。
   */
  created_time: string;
  file: mediaContentWithFileNameAndCaptionResponse;
  /**
   * @title has children 值
   * @description has children 字段。
   */
  has_children: boolean;
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title fileInternalOrExternalFileWithNameResponse 数据结构
 * @description file Internal Or External File With Name Response 字段。
 */
export type fileInternalOrExternalFileWithNameResponse = {
  file: internalFileResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title fileMediaContentWithFileAndCaptionResponse 数据结构
 * @description file Media Content With File And Caption Response 字段。
 */
export type fileMediaContentWithFileAndCaptionResponse = {
  /**
   * @title caption 值
   * @description caption 字段。
   */
  caption: Array<richTextItemResponse>;
  file: internalFileResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title fileMediaContentWithFileNameAndCaptionResponse 数据结构
 * @description file Media Content With File Name And Caption Response 字段。
 */
export type fileMediaContentWithFileNameAndCaptionResponse = {
  /**
   * @title caption 值
   * @description caption 字段。
   */
  caption: Array<richTextItemResponse>;
  file: internalFileResponse;
  /**
   * @title name 值
   * @description 名称。
   */
  name: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title filePageCoverResponse 数据结构
 * @description file Page Cover Response 字段。
 */
export type filePageCoverResponse = {
  file: internalFileResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title filePageIconResponse 数据结构
 * @description file Page Icon Response 字段。
 */
export type filePageIconResponse = {
  file: internalFileResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title fileUploadCompletedWebhookPayload 数据结构
 * @description file Upload Completed Webhook Payload 字段。
 */
export type fileUploadCompletedWebhookPayload = any

/**
 * @title fileUploadCreatedWebhookPayload 数据结构
 * @description file Upload Created Webhook Payload 字段。
 */
export type fileUploadCreatedWebhookPayload = any

/**
 * @title fileUploadExpiredWebhookPayload 数据结构
 * @description file Upload Expired Webhook Payload 字段。
 */
export type fileUploadExpiredWebhookPayload = any

/**
 * @title fileUploadIdRequest 数据结构
 * @description file Upload Id Request 字段。
 */
export type fileUploadIdRequest = {
  id: idRequest;
}

/**
 * @title fileUploadObjectResponse 数据结构
 * @description 文件上传对象响应。
 */
export type fileUploadObjectResponse = {
  /**
   * @title complete url 值
   * @description complete url 字段。
   */
  complete_url?: string;
  /**
   * @title content length 值
   * @description content length 字段。
   */
  content_length: number;
  /**
   * @title content type 值
   * @description content type 字段。
   */
  content_type: string;
  /**
   * @title created by 值
   * @description 创建者。
   */
  created_by: {
    id: idResponse;
    /**
     * @title type 值
     * @description 对象或块类型。
     */
    type: 'person' | 'bot' | 'agent'
  };
  /**
   * @title created time 值
   * @description 创建时间（ISO 8601）。
   */
  created_time: string;
  /**
   * @title expiry time 值
   * @description expiry time 字段。
   */
  expiry_time: string;
  /**
   * @title file import result 值
   * @description file import result 字段。
   */
  file_import_result?: any;
  /**
   * @title filename 值
   * @description filename 字段。
   */
  filename: string;
  id: idResponse;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title number of parts 值
   * @description number of parts 字段。
   */
  number_of_parts?: {
    /**
     * @title sent 值
     * @description sent 字段。
     */
    sent: number;
    /**
     * @title total 值
     * @description 总数。
     */
    total: number
  };
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title status 值
   * @description HTTP 状态码。
   */
  status: 'pending' | 'uploaded' | 'expired' | 'failed';
  /**
   * @title upload url 值
   * @description upload url 字段。
   */
  upload_url?: string;
}

/**
 * @title fileUploadPageCoverRequest 数据结构
 * @description file Upload Page Cover Request 字段。
 */
export type fileUploadPageCoverRequest = {
  /**
   * @title file upload 值
   * @description file upload 字段。
   */
  file_upload: {
    /**
     * @title id 值
     * @description 资源的 UUID v4 标识符。
     */
    id: string
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title fileUploadPageIconRequest 数据结构
 * @description file Upload Page Icon Request 字段。
 */
export type fileUploadPageIconRequest = {
  /**
   * @title file upload 值
   * @description file upload 字段。
   */
  file_upload: {
    /**
     * @title id 值
     * @description 资源的 UUID v4 标识符。
     */
    id: string
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title fileUploadUploadFailedWebhookPayload 数据结构
 * @description file Upload Upload Failed Webhook Payload 字段。
 */
export type fileUploadUploadFailedWebhookPayload = any

/**
 * @title fileUploadWithOptionalNameRequest 数据结构
 * @description file Upload With Optional Name Request 字段。
 */
export type fileUploadWithOptionalNameRequest = {
  file_upload: fileUploadIdRequest;
  name?: stringRequest;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title filesDatabasePropertyConfigResponse 数据结构
 * @description files Database Property Config Response 字段。
 */
export type filesDatabasePropertyConfigResponse = {
  files: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title filesPropertyConfigurationRequest 数据结构
 * @description files Property Configuration Request 字段。
 */
export type filesPropertyConfigurationRequest = {
  files: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title filesPropertyItemObjectResponse 数据结构
 * @description files Property Item Object Response 字段。
 */
export type filesPropertyItemObjectResponse = {
  /**
   * @title files 值
   * @description 文件列表。
   */
  files: Array<internalOrExternalFileWithNameResponse>;
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title filesSimplePropertyValueResponse 数据结构
 * @description files Simple Property Value Response 字段。
 */
export type filesSimplePropertyValueResponse = {
  /**
   * @title files 值
   * @description 文件列表。
   */
  files: Array<internalOrExternalFileWithNameResponse>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title formViewConfigRequest 数据结构
 * @description form View Config Request 字段。
 */
export type formViewConfigRequest = {
  /**
   * @title anonymous submissions 值
   * @description anonymous submissions 字段。
   */
  anonymous_submissions?: boolean;
  /**
   * @title is form closed 值
   * @description is form closed 字段。
   */
  is_form_closed?: boolean;
  /**
   * @title submission permissions 值
   * @description submission permissions 字段。
   */
  submission_permissions?: 'none' | 'comment_only' | 'reader' | 'read_and_write' | 'editor';
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title formViewConfigResponse 数据结构
 * @description form View Config Response 字段。
 */
export type formViewConfigResponse = {
  /**
   * @title anonymous submissions 值
   * @description anonymous submissions 字段。
   */
  anonymous_submissions?: boolean;
  /**
   * @title is form closed 值
   * @description is form closed 字段。
   */
  is_form_closed?: boolean;
  /**
   * @title submission permissions 值
   * @description submission permissions 字段。
   */
  submission_permissions?: 'none' | 'comment_only' | 'reader' | 'read_and_write' | 'editor';
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title formulaCheckboxSubGroupByRequest 数据结构
 * @description formula Checkbox Sub Group By Request 字段。
 */
export type formulaCheckboxSubGroupByRequest = {
  sort: groupSortRequest;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title formulaCheckboxSubGroupByResponse 数据结构
 * @description formula Checkbox Sub Group By Response 字段。
 */
export type formulaCheckboxSubGroupByResponse = {
  sort: groupSortResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title formulaDatabasePropertyConfigResponse 数据结构
 * @description formula Database Property Config Response 字段。
 */
export type formulaDatabasePropertyConfigResponse = {
  /**
   * @title formula 值
   * @description 公式。
   */
  formula: {
    /**
     * @title expression 值
     * @description expression 字段。
     */
    expression: string
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title formulaDateSubGroupByRequest 数据结构
 * @description formula Date Sub Group By Request 字段。
 */
export type formulaDateSubGroupByRequest = {
  /**
   * @title group by 值
   * @description group by 字段。
   */
  group_by: 'relative' | 'day' | 'week' | 'month' | 'year';
  sort: groupSortRequest;
  /**
   * @title start day of week 值
   * @description start day of week 字段。
   */
  start_day_of_week?: 0 | 1;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title formulaDateSubGroupByResponse 数据结构
 * @description formula Date Sub Group By Response 字段。
 */
export type formulaDateSubGroupByResponse = {
  /**
   * @title group by 值
   * @description group by 字段。
   */
  group_by: 'relative' | 'day' | 'week' | 'month' | 'year';
  sort: groupSortResponse;
  /**
   * @title start day of week 值
   * @description start day of week 字段。
   */
  start_day_of_week?: 0 | 1;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title formulaGroupByConfigRequest 数据结构
 * @description formula Group By Config Request 字段。
 */
export type formulaGroupByConfigRequest = {
  /**
   * @title group by 值
   * @description group by 字段。
   */
  group_by: any;
  /**
   * @title hide empty groups 值
   * @description hide empty groups 字段。
   */
  hide_empty_groups?: boolean;
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title formulaGroupByConfigResponse 数据结构
 * @description formula Group By Config Response 字段。
 */
export type formulaGroupByConfigResponse = {
  group_by: formulaSubGroupByResponse;
  /**
   * @title hide empty groups 值
   * @description hide empty groups 字段。
   */
  hide_empty_groups?: boolean;
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id: string;
  /**
   * @title property name 值
   * @description property name 字段。
   */
  property_name?: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title formulaNumberSubGroupByRequest 数据结构
 * @description formula Number Sub Group By Request 字段。
 */
export type formulaNumberSubGroupByRequest = {
  /**
   * @title range end 值
   * @description range end 字段。
   */
  range_end?: number;
  /**
   * @title range size 值
   * @description range size 字段。
   */
  range_size?: number;
  /**
   * @title range start 值
   * @description range start 字段。
   */
  range_start?: number;
  sort: groupSortRequest;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title formulaNumberSubGroupByResponse 数据结构
 * @description formula Number Sub Group By Response 字段。
 */
export type formulaNumberSubGroupByResponse = {
  /**
   * @title range end 值
   * @description range end 字段。
   */
  range_end?: number;
  /**
   * @title range size 值
   * @description range size 字段。
   */
  range_size?: number;
  /**
   * @title range start 值
   * @description range start 字段。
   */
  range_start?: number;
  sort: groupSortResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title formulaPropertyConfigurationRequest 数据结构
 * @description formula Property Configuration Request 字段。
 */
export type formulaPropertyConfigurationRequest = {
  /**
   * @title formula 值
   * @description 公式。
   */
  formula: {
    /**
     * @title expression 值
     * @description expression 字段。
     */
    expression?: string
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title formulaPropertyFilter 数据结构
 * @description formula Property Filter 字段。
 */
export type formulaPropertyFilter = any

/**
 * @title formulaPropertyItemObjectResponse 数据结构
 * @description formula Property Item Object Response 字段。
 */
export type formulaPropertyItemObjectResponse = {
  formula: formulaPropertyResponse;
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title formulaPropertyResponse 数据结构
 * @description formula Property Response 字段。
 */
export type formulaPropertyResponse = any

/**
 * @title formulaPropertyValueResponse 数据结构
 * @description formula Property Value Response 字段。
 */
export type formulaPropertyValueResponse = any

/**
 * @title formulaSimplePropertyValueResponse 数据结构
 * @description formula Simple Property Value Response 字段。
 */
export type formulaSimplePropertyValueResponse = {
  formula: formulaPropertyValueResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title formulaSubGroupByResponse 数据结构
 * @description formula Sub Group By Response 字段。
 */
export type formulaSubGroupByResponse = any

/**
 * @title formulaTextSubGroupByRequest 数据结构
 * @description formula Text Sub Group By Request 字段。
 */
export type formulaTextSubGroupByRequest = {
  /**
   * @title group by 值
   * @description group by 字段。
   */
  group_by: 'exact' | 'alphabet_prefix';
  sort: groupSortRequest;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title formulaTextSubGroupByResponse 数据结构
 * @description formula Text Sub Group By Response 字段。
 */
export type formulaTextSubGroupByResponse = {
  /**
   * @title group by 值
   * @description group by 字段。
   */
  group_by: 'exact' | 'alphabet_prefix';
  sort: groupSortResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title galleryViewConfigRequest 数据结构
 * @description gallery View Config Request 字段。
 */
export type galleryViewConfigRequest = {
  /**
   * @title card layout 值
   * @description card layout 字段。
   */
  card_layout?: 'list' | 'compact';
  /**
   * @title cover 值
   * @description 资源封面。
   */
  cover?: any;
  /**
   * @title cover aspect 值
   * @description cover aspect 字段。
   */
  cover_aspect?: 'contain' | 'cover';
  /**
   * @title cover size 值
   * @description cover size 字段。
   */
  cover_size?: 'small' | 'medium' | 'large';
  /**
   * @title properties 值
   * @description 页面属性值或数据源属性模式。
   */
  properties?: Array<viewPropertyConfigRequest>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title galleryViewConfigResponse 数据结构
 * @description gallery View Config Response 字段。
 */
export type galleryViewConfigResponse = {
  /**
   * @title card layout 值
   * @description card layout 字段。
   */
  card_layout?: 'list' | 'compact';
  cover?: coverConfigResponse;
  /**
   * @title cover aspect 值
   * @description cover aspect 字段。
   */
  cover_aspect?: 'contain' | 'cover';
  /**
   * @title cover size 值
   * @description cover size 字段。
   */
  cover_size?: 'small' | 'medium' | 'large';
  /**
   * @title properties 值
   * @description 页面属性值或数据源属性模式。
   */
  properties?: Array<viewPropertyConfigResponse>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title groupByConfigRequest 数据结构
 * @description group By Config Request 字段。
 */
export type groupByConfigRequest = any

/**
 * @title groupByConfigResponse 数据结构
 * @description group By Config Response 字段。
 */
export type groupByConfigResponse = any

/**
 * @title groupFilterOperatorArray 数据结构
 * @description group Filter Operator Array 字段。
 */
export type groupFilterOperatorArray = Array<any>

/**
 * @title groupObjectRequest 数据结构
 * @description group Object Request 字段。
 */
export type groupObjectRequest = {
  id: idRequest;
  /**
   * @title name 值
   * @description 名称。
   */
  name?: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object?: string;
}

/**
 * @title groupObjectResponse 数据结构
 * @description group Object Response 字段。
 */
export type groupObjectResponse = {
  id: idResponse;
  /**
   * @title name 值
   * @description 名称。
   */
  name: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
}

/**
 * @title groupSortRequest 数据结构
 * @description group Sort Request 字段。
 */
export type groupSortRequest = {
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: 'manual' | 'ascending' | 'descending';
}

/**
 * @title groupSortResponse 数据结构
 * @description group Sort Response 字段。
 */
export type groupSortResponse = {
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: 'manual' | 'ascending' | 'descending';
}

/**
 * @title headerContentWithRichTextAndColorRequest 数据结构
 * @description header Content With Rich Text And Color Request 字段。
 */
export type headerContentWithRichTextAndColorRequest = {
  color?: apiColor;
  /**
   * @title is toggleable 值
   * @description is toggleable 字段。
   */
  is_toggleable?: boolean;
  /**
   * @title rich text 值
   * @description 富文本项列表。
   */
  rich_text: Array<richTextItemRequest>;
}

/**
 * @title headerContentWithRichTextAndColorResponse 数据结构
 * @description header Content With Rich Text And Color Response 字段。
 */
export type headerContentWithRichTextAndColorResponse = {
  color: apiColor;
  /**
   * @title is toggleable 值
   * @description is toggleable 字段。
   */
  is_toggleable: boolean;
  /**
   * @title rich text 值
   * @description 富文本项列表。
   */
  rich_text: Array<richTextItemResponse>;
}

/**
 * @title headerContentWithSingleLevelOfChildrenRequest 数据结构
 * @description header Content With Single Level Of Children Request 字段。
 */
export type headerContentWithSingleLevelOfChildrenRequest = {
  /**
   * @title children 值
   * @description 子块列表。
   */
  children?: Array<blockObjectRequestWithoutChildren>;
  color?: apiColor;
  /**
   * @title is toggleable 值
   * @description is toggleable 字段。
   */
  is_toggleable?: boolean;
  /**
   * @title rich text 值
   * @description 富文本项列表。
   */
  rich_text: Array<richTextItemRequest>;
}

/**
 * @title heading1BlockObjectResponse 数据结构
 * @description heading1Block Object Response 字段。
 */
export type heading1BlockObjectResponse = {
  created_by: partialUserObjectResponse;
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
  heading_1: headerContentWithRichTextAndColorResponse;
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title heading2BlockObjectResponse 数据结构
 * @description heading2Block Object Response 字段。
 */
export type heading2BlockObjectResponse = {
  created_by: partialUserObjectResponse;
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
  heading_2: headerContentWithRichTextAndColorResponse;
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title heading3BlockObjectResponse 数据结构
 * @description heading3Block Object Response 字段。
 */
export type heading3BlockObjectResponse = {
  created_by: partialUserObjectResponse;
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
  heading_3: headerContentWithRichTextAndColorResponse;
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title heading4BlockObjectResponse 数据结构
 * @description heading4Block Object Response 字段。
 */
export type heading4BlockObjectResponse = {
  created_by: partialUserObjectResponse;
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
  heading_4: headerContentWithRichTextAndColorResponse;
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title iconPageIconRequest 数据结构
 * @description icon Page Icon Request 字段。
 */
export type iconPageIconRequest = {
  /**
   * @title icon 值
   * @description 资源图标。
   */
  icon: {
    color?: noticonColor;
    name: noticonName
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title iconPageIconResponse 数据结构
 * @description icon Page Icon Response 字段。
 */
export type iconPageIconResponse = {
  icon: noticonIconResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title idObjectResponse 数据结构
 * @description id Object Response 字段。
 */
export type idObjectResponse = {
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
}

/**
 * @title idRequest 数据结构
 * @description 对象 ID 请求。
 */
export type idRequest = string

/**
 * @title idResponse 数据结构
 * @description 对象 ID 响应。
 */
export type idResponse = string

/**
 * @title imageBlockObjectResponse 数据结构
 * @description image Block Object Response 字段。
 */
export type imageBlockObjectResponse = {
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  image: mediaContentWithFileAndCaptionResponse;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title initialDataSourceRequest 数据结构
 * @description initial Data Source Request 字段。
 */
export type initialDataSourceRequest = {
  /**
   * @title properties 值
   * @description 页面属性值或数据源属性模式。
   */
  properties?: Record<any, propertyConfigurationRequest>;
}

/**
 * @title internalFileRequest 数据结构
 * @description internal File Request 字段。
 */
export type internalFileRequest = {
  /**
   * @title expiry time 值
   * @description expiry time 字段。
   */
  expiry_time?: string;
  /**
   * @title url 值
   * @description 资源在 Notion 中的打开链接。
   */
  url: string;
}

/**
 * @title internalFileResponse 数据结构
 * @description internal File Response 字段。
 */
export type internalFileResponse = {
  /**
   * @title expiry time 值
   * @description expiry time 字段。
   */
  expiry_time: string;
  /**
   * @title url 值
   * @description 资源在 Notion 中的打开链接。
   */
  url: string;
}

/**
 * @title internalOrExternalFileWithNameRequest 数据结构
 * @description internal Or External File With Name Request 字段。
 */
export type internalOrExternalFileWithNameRequest = any

/**
 * @title internalOrExternalFileWithNameResponse 数据结构
 * @description internal Or External File With Name Response 字段。
 */
export type internalOrExternalFileWithNameResponse = any

/**
 * @title internalOrExternalFileWithNameResponseCommon 数据结构
 * @description internal Or External File With Name Response Common 字段。
 */
export type internalOrExternalFileWithNameResponseCommon = {
  /**
   * @title name 值
   * @description 名称。
   */
  name: string;
}

/**
 * @title languageRequest 数据结构
 * @description language Request 字段。
 */
export type languageRequest = 'abap' | 'abc' | 'agda' | 'arduino' | 'ascii art' | 'assembly' | 'bash' | 'basic' | 'bnf' | 'c' | 'c#' | 'c++' | 'clojure' | 'coffeescript' | 'coq' | 'css' | 'dart' | 'dhall' | 'diff' | 'docker' | 'ebnf' | 'elixir' | 'elm' | 'erlang' | 'f#' | 'flow' | 'fortran' | 'gherkin' | 'glsl' | 'go' | 'graphql' | 'groovy' | 'haskell' | 'hcl' | 'html' | 'idris' | 'java' | 'javascript' | 'json' | 'julia' | 'kotlin' | 'latex' | 'less' | 'lisp' | 'livescript' | 'llvm ir' | 'lua' | 'makefile' | 'markdown' | 'markup' | 'matlab' | 'mathematica' | 'mermaid' | 'nix' | 'notion formula' | 'objective-c' | 'ocaml' | 'pascal' | 'perl' | 'php' | 'plain text' | 'powershell' | 'prolog' | 'protobuf' | 'purescript' | 'python' | 'r' | 'racket' | 'reason' | 'ruby' | 'rust' | 'sass' | 'scala' | 'scheme' | 'scss' | 'shell' | 'smalltalk' | 'solidity' | 'sql' | 'swift' | 'toml' | 'typescript' | 'vb.net' | 'verilog' | 'vhdl' | 'visual basic' | 'webassembly' | 'xml' | 'yaml' | 'java/c/c++/c#'

/**
 * @title lastEditedByDatabasePropertyConfigResponse 数据结构
 * @description last Edited By Database Property Config Response 字段。
 */
export type lastEditedByDatabasePropertyConfigResponse = {
  last_edited_by: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title lastEditedByPropertyConfigurationRequest 数据结构
 * @description last Edited By Property Configuration Request 字段。
 */
export type lastEditedByPropertyConfigurationRequest = {
  last_edited_by: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title lastEditedByPropertyItemObjectResponse 数据结构
 * @description last Edited By Property Item Object Response 字段。
 */
export type lastEditedByPropertyItemObjectResponse = {
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title last edited by 值
   * @description 最后编辑者。
   */
  last_edited_by: any;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title lastEditedBySimplePropertyValueResponse 数据结构
 * @description last Edited By Simple Property Value Response 字段。
 */
export type lastEditedBySimplePropertyValueResponse = {
  last_edited_by: userValueResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title lastEditedTimeDatabasePropertyConfigResponse 数据结构
 * @description last Edited Time Database Property Config Response 字段。
 */
export type lastEditedTimeDatabasePropertyConfigResponse = {
  last_edited_time: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title lastEditedTimePropertyConfigurationRequest 数据结构
 * @description last Edited Time Property Configuration Request 字段。
 */
export type lastEditedTimePropertyConfigurationRequest = {
  last_edited_time: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title lastEditedTimePropertyItemObjectResponse 数据结构
 * @description last Edited Time Property Item Object Response 字段。
 */
export type lastEditedTimePropertyItemObjectResponse = {
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title lastEditedTimeSimplePropertyValueResponse 数据结构
 * @description last Edited Time Simple Property Value Response 字段。
 */
export type lastEditedTimeSimplePropertyValueResponse = {
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title lastVisitedTimePropertyConfigurationRequest 数据结构
 * @description last Visited Time Property Configuration Request 字段。
 */
export type lastVisitedTimePropertyConfigurationRequest = {
  last_visited_time: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title linkMentionResponse 数据结构
 * @description link Mention Response 字段。
 */
export type linkMentionResponse = {
  /**
   * @title description 值
   * @description 资源说明。
   */
  description?: string;
  /**
   * @title height 值
   * @description height 字段。
   */
  height?: number;
  /**
   * @title href 值
   * @description 链接地址。
   */
  href: string;
  /**
   * @title icon url 值
   * @description icon url 字段。
   */
  icon_url?: string;
  /**
   * @title iframe url 值
   * @description iframe url 字段。
   */
  iframe_url?: string;
  /**
   * @title link author 值
   * @description link author 字段。
   */
  link_author?: string;
  /**
   * @title link provider 值
   * @description link provider 字段。
   */
  link_provider?: string;
  /**
   * @title padding 值
   * @description padding 字段。
   */
  padding?: number;
  /**
   * @title padding top 值
   * @description padding top 字段。
   */
  padding_top?: number;
  /**
   * @title thumbnail url 值
   * @description thumbnail url 字段。
   */
  thumbnail_url?: string;
  /**
   * @title title 值
   * @description 资源标题。
   */
  title?: string;
}

/**
 * @title linkPreviewBlockObjectResponse 数据结构
 * @description link Preview Block Object Response 字段。
 */
export type linkPreviewBlockObjectResponse = {
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  link_preview: mediaContentWithUrlResponse;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title linkPreviewMentionResponse 数据结构
 * @description link Preview Mention Response 字段。
 */
export type linkPreviewMentionResponse = {
  /**
   * @title url 值
   * @description 资源在 Notion 中的打开链接。
   */
  url: string;
}

/**
 * @title linkToPageBlockObjectResponse 数据结构
 * @description link To Page Block Object Response 字段。
 */
export type linkToPageBlockObjectResponse = {
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title link to page 值
   * @description link to page 字段。
   */
  link_to_page: any;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title listViewConfigRequest 数据结构
 * @description list View Config Request 字段。
 */
export type listViewConfigRequest = {
  /**
   * @title properties 值
   * @description 页面属性值或数据源属性模式。
   */
  properties?: Array<viewPropertyConfigRequest>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title listViewConfigResponse 数据结构
 * @description list View Config Response 字段。
 */
export type listViewConfigResponse = {
  /**
   * @title properties 值
   * @description 页面属性值或数据源属性模式。
   */
  properties?: Array<viewPropertyConfigResponse>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title locationPropertyConfigurationRequest 数据结构
 * @description location Property Configuration Request 字段。
 */
export type locationPropertyConfigurationRequest = {
  location: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title mapViewConfigRequest 数据结构
 * @description map View Config Request 字段。
 */
export type mapViewConfigRequest = {
  /**
   * @title height 值
   * @description height 字段。
   */
  height?: 'small' | 'medium' | 'large' | 'extra_large';
  /**
   * @title map by 值
   * @description map by 字段。
   */
  map_by?: string;
  /**
   * @title properties 值
   * @description 页面属性值或数据源属性模式。
   */
  properties?: Array<viewPropertyConfigRequest>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title mapViewConfigResponse 数据结构
 * @description map View Config Response 字段。
 */
export type mapViewConfigResponse = {
  /**
   * @title height 值
   * @description height 字段。
   */
  height?: 'small' | 'medium' | 'large' | 'extra_large';
  /**
   * @title map by 值
   * @description map by 字段。
   */
  map_by?: string;
  /**
   * @title map by property name 值
   * @description map by property name 字段。
   */
  map_by_property_name?: string;
  /**
   * @title properties 值
   * @description 页面属性值或数据源属性模式。
   */
  properties?: Array<viewPropertyConfigResponse>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title mediaContentWithFileAndCaptionRequest 数据结构
 * @description media Content With File And Caption Request 字段。
 */
export type mediaContentWithFileAndCaptionRequest = any

/**
 * @title mediaContentWithFileAndCaptionResponse 数据结构
 * @description media Content With File And Caption Response 字段。
 */
export type mediaContentWithFileAndCaptionResponse = any

/**
 * @title mediaContentWithFileNameAndCaptionRequest 数据结构
 * @description media Content With File Name And Caption Request 字段。
 */
export type mediaContentWithFileNameAndCaptionRequest = any

/**
 * @title mediaContentWithFileNameAndCaptionResponse 数据结构
 * @description media Content With File Name And Caption Response 字段。
 */
export type mediaContentWithFileNameAndCaptionResponse = any

/**
 * @title mediaContentWithUrlAndCaptionRequest 数据结构
 * @description media Content With Url And Caption Request 字段。
 */
export type mediaContentWithUrlAndCaptionRequest = {
  /**
   * @title caption 值
   * @description caption 字段。
   */
  caption?: Array<richTextItemRequest>;
  /**
   * @title url 值
   * @description 资源在 Notion 中的打开链接。
   */
  url: string;
}

/**
 * @title mediaContentWithUrlAndCaptionResponse 数据结构
 * @description media Content With Url And Caption Response 字段。
 */
export type mediaContentWithUrlAndCaptionResponse = {
  /**
   * @title caption 值
   * @description caption 字段。
   */
  caption: Array<richTextItemResponse>;
  /**
   * @title url 值
   * @description 资源在 Notion 中的打开链接。
   */
  url: string;
}

/**
 * @title mediaContentWithUrlResponse 数据结构
 * @description media Content With Url Response 字段。
 */
export type mediaContentWithUrlResponse = {
  url: textRequest;
}

/**
 * @title meetingNotesBlockObjectResponse 数据结构
 * @description meeting Notes Block Object Response 字段。
 */
export type meetingNotesBlockObjectResponse = {
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  meeting_notes: transcriptionBlockResponse;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title mentionRichTextItemRequest 数据结构
 * @description mention Rich Text Item Request 字段。
 */
export type mentionRichTextItemRequest = {
  /**
   * @title mention 值
   * @description 提及对象。
   */
  mention: any;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title mentionRichTextItemResponse 数据结构
 * @description mention Rich Text Item Response 字段。
 */
export type mentionRichTextItemResponse = {
  /**
   * @title mention 值
   * @description 提及对象。
   */
  mention: any;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title multiSelectDatabasePropertyConfigResponse 数据结构
 * @description multi Select Database Property Config Response 字段。
 */
export type multiSelectDatabasePropertyConfigResponse = {
  /**
   * @title multi select 值
   * @description 多选选项。
   */
  multi_select: {
    /**
     * @title options 值
     * @description 选项列表。
     */
    options: Array<selectPropertyResponse>
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title multiSelectPropertyConfigurationRequest 数据结构
 * @description multi Select Property Configuration Request 字段。
 */
export type multiSelectPropertyConfigurationRequest = {
  /**
   * @title multi select 值
   * @description 多选选项。
   */
  multi_select: {
    /**
     * @title options 值
     * @description 选项列表。
     */
    options?: Array<{
      color?: selectColor;
      /**
       * @title description 值
       * @description 资源说明。
       */
      description?: string;
      /**
       * @title name 值
       * @description 名称。
       */
      name: string
    }>
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title multiSelectPropertyFilter 数据结构
 * @description multi Select Property Filter 字段。
 */
export type multiSelectPropertyFilter = any

/**
 * @title multiSelectPropertyItemObjectResponse 数据结构
 * @description multi Select Property Item Object Response 字段。
 */
export type multiSelectPropertyItemObjectResponse = {
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title multi select 值
   * @description 多选选项。
   */
  multi_select: Array<partialSelectResponse>;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title multiSelectSimplePropertyValueResponse 数据结构
 * @description multi Select Simple Property Value Response 字段。
 */
export type multiSelectSimplePropertyValueResponse = {
  /**
   * @title multi select 值
   * @description 多选选项。
   */
  multi_select: Array<partialSelectPropertyValueResponse>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title nonTerminalAsyncTaskStatus 数据结构
 * @description non Terminal Async Task Status 字段。
 */
export type nonTerminalAsyncTaskStatus = 'queued' | 'running' | 'retrying'

/**
 * @title noticonColor 数据结构
 * @description noticon Color 字段。
 */
export type noticonColor = 'gray' | 'lightgray' | 'brown' | 'yellow' | 'orange' | 'green' | 'blue' | 'purple' | 'pink' | 'red'

/**
 * @title noticonIconResponse 数据结构
 * @description noticon Icon Response 字段。
 */
export type noticonIconResponse = {
  color: noticonColor;
  name: noticonName;
}

/**
 * @title noticonName 数据结构
 * @description noticon Name 字段。
 */
export type noticonName = string

/**
 * @title numberDatabasePropertyConfigResponse 数据结构
 * @description number Database Property Config Response 字段。
 */
export type numberDatabasePropertyConfigResponse = {
  /**
   * @title number 值
   * @description 数值。
   */
  number: {
    format: numberFormat
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title numberFormat 数据结构
 * @description number Format 字段。
 */
export type numberFormat = string

/**
 * @title numberFormulaPropertyResponse 数据结构
 * @description number Formula Property Response 字段。
 */
export type numberFormulaPropertyResponse = {
  /**
   * @title number 值
   * @description 数值。
   */
  number: number;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title numberFormulaPropertyValueResponse 数据结构
 * @description number Formula Property Value Response 字段。
 */
export type numberFormulaPropertyValueResponse = {
  /**
   * @title number 值
   * @description 数值。
   */
  number: number;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title numberGroupByConfigRequest 数据结构
 * @description number Group By Config Request 字段。
 */
export type numberGroupByConfigRequest = {
  /**
   * @title hide empty groups 值
   * @description hide empty groups 字段。
   */
  hide_empty_groups?: boolean;
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id: string;
  /**
   * @title range end 值
   * @description range end 字段。
   */
  range_end?: number;
  /**
   * @title range size 值
   * @description range size 字段。
   */
  range_size?: number;
  /**
   * @title range start 值
   * @description range start 字段。
   */
  range_start?: number;
  sort: groupSortRequest;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title numberGroupByConfigResponse 数据结构
 * @description number Group By Config Response 字段。
 */
export type numberGroupByConfigResponse = {
  /**
   * @title hide empty groups 值
   * @description hide empty groups 字段。
   */
  hide_empty_groups?: boolean;
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id: string;
  /**
   * @title property name 值
   * @description property name 字段。
   */
  property_name?: string;
  /**
   * @title range end 值
   * @description range end 字段。
   */
  range_end?: number;
  /**
   * @title range size 值
   * @description range size 字段。
   */
  range_size?: number;
  /**
   * @title range start 值
   * @description range start 字段。
   */
  range_start?: number;
  sort: groupSortResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title numberPartialRollupValueResponse 数据结构
 * @description number Partial Rollup Value Response 字段。
 */
export type numberPartialRollupValueResponse = {
  /**
   * @title number 值
   * @description 数值。
   */
  number: number;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title numberPropertyConfigurationRequest 数据结构
 * @description number Property Configuration Request 字段。
 */
export type numberPropertyConfigurationRequest = {
  /**
   * @title number 值
   * @description 数值。
   */
  number: {
    format?: numberFormat
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title numberPropertyFilter 数据结构
 * @description number Property Filter 字段。
 */
export type numberPropertyFilter = any

/**
 * @title numberPropertyItemObjectResponse 数据结构
 * @description number Property Item Object Response 字段。
 */
export type numberPropertyItemObjectResponse = {
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title number 值
   * @description 数值。
   */
  number: number;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title numberSimplePropertyValueResponse 数据结构
 * @description number Simple Property Value Response 字段。
 */
export type numberSimplePropertyValueResponse = {
  /**
   * @title number 值
   * @description 数值。
   */
  number: number;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title numberedListFormat 数据结构
 * @description numbered List Format 字段。
 */
export type numberedListFormat = 'numbers' | 'letters' | 'roman'

/**
 * @title numberedListItemBlockObjectResponse 数据结构
 * @description numbered List Item Block Object Response 字段。
 */
export type numberedListItemBlockObjectResponse = {
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  numbered_list_item: contentWithRichTextAndColorAndListResponse;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title pageContentUpdatedWebhookPayload 数据结构
 * @description page Content Updated Webhook Payload 字段。
 */
export type pageContentUpdatedWebhookPayload = any

/**
 * @title pageCoverRequest 数据结构
 * @description page Cover Request 字段。
 */
export type pageCoverRequest = any

/**
 * @title pageCoverResponse 数据结构
 * @description page Cover Response 字段。
 */
export type pageCoverResponse = any

/**
 * @title pageCreatedWebhookPayload 数据结构
 * @description page Created Webhook Payload 字段。
 */
export type pageCreatedWebhookPayload = any

/**
 * @title pageDeletedWebhookPayload 数据结构
 * @description page Deleted Webhook Payload 字段。
 */
export type pageDeletedWebhookPayload = any

/**
 * @title pageIconRequest 数据结构
 * @description page Icon Request 字段。
 */
export type pageIconRequest = any

/**
 * @title pageIconResponse 数据结构
 * @description page Icon Response 字段。
 */
export type pageIconResponse = any

/**
 * @title pageIdCommentParentResponse 数据结构
 * @description page Id Comment Parent Response 字段。
 */
export type pageIdCommentParentResponse = {
  page_id: idResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title pageIdParentForBlockBasedObjectResponse 数据结构
 * @description page Id Parent For Block Based Object Response 字段。
 */
export type pageIdParentForBlockBasedObjectResponse = {
  page_id: idResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title pageLockedWebhookPayload 数据结构
 * @description page Locked Webhook Payload 字段。
 */
export type pageLockedWebhookPayload = any

/**
 * @title pageMarkdownResponse 数据结构
 * @description page Markdown Response 字段。
 */
export type pageMarkdownResponse = {
  id: idResponse;
  /**
   * @title markdown 值
   * @description markdown 字段。
   */
  markdown: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title truncated 值
   * @description truncated 字段。
   */
  truncated: boolean;
  /**
   * @title unknown block ids 值
   * @description unknown block ids 字段。
   */
  unknown_block_ids: Array<idResponse>;
}

/**
 * @title pageMovedWebhookPayload 数据结构
 * @description page Moved Webhook Payload 字段。
 */
export type pageMovedWebhookPayload = any

/**
 * @title pageObjectResponse 数据结构
 * @description 页面对象响应。
 */
export type pageObjectResponse = {
  /**
   * @title cover 值
   * @description 资源封面。
   */
  cover: any;
  created_by: partialUserObjectResponse;
  /**
   * @title created time 值
   * @description 创建时间（ISO 8601）。
   */
  created_time: string;
  /**
   * @title icon 值
   * @description 资源图标。
   */
  icon: any;
  id: idResponse;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  /**
   * @title is archived 值
   * @description is archived 字段。
   */
  is_archived: boolean;
  /**
   * @title is locked 值
   * @description is locked 字段。
   */
  is_locked: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title properties 值
   * @description 页面属性值或数据源属性模式。
   */
  properties: Record<any, pagePropertyValueWithIdResponse>;
  /**
   * @title public url 值
   * @description 公开访问链接。
   */
  public_url: string;
  /**
   * @title url 值
   * @description 资源在 Notion 中的打开链接。
   */
  url: string;
}

/**
 * @title pagePositionSchema 数据结构
 * @description page Position Schema 字段。
 */
export type pagePositionSchema = any

/**
 * @title pagePropertiesUpdatedWebhookPayload 数据结构
 * @description page Properties Updated Webhook Payload 字段。
 */
export type pagePropertiesUpdatedWebhookPayload = any

/**
 * @title pagePropertyValueWithIdResponse 数据结构
 * @description page Property Value With Id Response 字段。
 */
export type pagePropertyValueWithIdResponse = any

/**
 * @title pageReferenceResponse 数据结构
 * @description page Reference Response 字段。
 */
export type pageReferenceResponse = {
  id: idResponse;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
}

/**
 * @title pageTranscriptionBlockTranscriptDeletedWebhookPayload 数据结构
 * @description page Transcription Block Transcript Deleted Webhook Payload 字段。
 */
export type pageTranscriptionBlockTranscriptDeletedWebhookPayload = any

/**
 * @title pageUndeletedWebhookPayload 数据结构
 * @description page Undeleted Webhook Payload 字段。
 */
export type pageUndeletedWebhookPayload = any

/**
 * @title pageUnlockedWebhookPayload 数据结构
 * @description page Unlocked Webhook Payload 字段。
 */
export type pageUnlockedWebhookPayload = any

/**
 * @title paragraphBlockObjectResponse 数据结构
 * @description paragraph Block Object Response 字段。
 */
export type paragraphBlockObjectResponse = {
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  paragraph: contentWithRichTextColorAndIconResponse;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title paragraphWithSingleLevelOfChildrenRequest 数据结构
 * @description paragraph With Single Level Of Children Request 字段。
 */
export type paragraphWithSingleLevelOfChildrenRequest = {
  /**
   * @title children 值
   * @description 子块列表。
   */
  children?: Array<blockObjectRequestWithoutChildren>;
  color?: apiColor;
  icon?: pageIconRequest;
  /**
   * @title rich text 值
   * @description 富文本项列表。
   */
  rich_text: Array<richTextItemRequest>;
}

/**
 * @title parentForBlockBasedObjectResponse 数据结构
 * @description parent For Block Based Object Response 字段。
 */
export type parentForBlockBasedObjectResponse = any

/**
 * @title parentOfDataSourceRequest 数据结构
 * @description parent Of Data Source Request 字段。
 */
export type parentOfDataSourceRequest = {
  database_id: idRequest;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title parentOfDataSourceResponse 数据结构
 * @description parent Of Data Source Response 字段。
 */
export type parentOfDataSourceResponse = any

/**
 * @title parentOfDatabaseResponse 数据结构
 * @description parent Of Database Response 字段。
 */
export type parentOfDatabaseResponse = any

/**
 * @title partialBlockObjectResponse 数据结构
 * @description 部分块对象响应。
 */
export type partialBlockObjectResponse = {
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
}

/**
 * @title partialCommentObjectResponse 数据结构
 * @description partial Comment Object Response 字段。
 */
export type partialCommentObjectResponse = {
  id: idResponse;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
}

/**
 * @title partialDataSourceObjectResponse 数据结构
 * @description 部分数据源对象响应。
 */
export type partialDataSourceObjectResponse = {
  id: idResponse;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title properties 值
   * @description 页面属性值或数据源属性模式。
   */
  properties: Record<any, databasePropertyConfigResponse>;
}

/**
 * @title partialDataSourceViewObjectResponse 数据结构
 * @description partial Data Source View Object Response 字段。
 */
export type partialDataSourceViewObjectResponse = {
  id: idResponse;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: databaseParentResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: 'table' | 'board' | 'list' | 'calendar' | 'timeline' | 'gallery' | 'form' | 'chart' | 'map' | 'dashboard';
}

/**
 * @title partialDatabaseObjectResponse 数据结构
 * @description 部分数据库对象响应。
 */
export type partialDatabaseObjectResponse = {
  id: idResponse;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
}

/**
 * @title partialPageObjectResponse 数据结构
 * @description 部分页面对象响应（仅含基础字段）。
 */
export type partialPageObjectResponse = {
  id: idResponse;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
}

/**
 * @title partialRollupPropertyResponse 数据结构
 * @description partial Rollup Property Response 字段。
 */
export type partialRollupPropertyResponse = {
  rollup: partialRollupValueResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title partialRollupValueResponse 数据结构
 * @description partial Rollup Value Response 字段。
 */
export type partialRollupValueResponse = any

/**
 * @title partialRollupValueResponseCommon 数据结构
 * @description partial Rollup Value Response Common 字段。
 */
export type partialRollupValueResponseCommon = {
  function: rollupFunction;
}

/**
 * @title partialSelectPropertyValueResponse 数据结构
 * @description partial Select Property Value Response 字段。
 */
export type partialSelectPropertyValueResponse = {
  /**
   * @title color 值
   * @description 颜色。
   */
  color: 'default' | 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red';
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title name 值
   * @description 名称。
   */
  name: string;
}

/**
 * @title partialSelectResponse 数据结构
 * @description partial Select Response 字段。
 */
export type partialSelectResponse = {
  color: selectColor;
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title name 值
   * @description 名称。
   */
  name: string;
}

/**
 * @title partialUserObjectRequest 数据结构
 * @description partial User Object Request 字段。
 */
export type partialUserObjectRequest = {
  id: idRequest;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object?: string;
}

/**
 * @title partialUserObjectResponse 数据结构
 * @description 部分用户对象响应。
 */
export type partialUserObjectResponse = {
  id: idResponse;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
}

/**
 * @title pdfBlockObjectResponse 数据结构
 * @description pdf Block Object Response 字段。
 */
export type pdfBlockObjectResponse = {
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  pdf: mediaContentWithFileAndCaptionResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title peopleArrayBasedPropertyValueResponse 数据结构
 * @description people Array Based Property Value Response 字段。
 */
export type peopleArrayBasedPropertyValueResponse = {
  /**
   * @title people 值
   * @description 人员引用。
   */
  people: Array<any>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title peopleDatabasePropertyConfigResponse 数据结构
 * @description people Database Property Config Response 字段。
 */
export type peopleDatabasePropertyConfigResponse = {
  people: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title peoplePropertyConfigurationRequest 数据结构
 * @description people Property Configuration Request 字段。
 */
export type peoplePropertyConfigurationRequest = {
  people: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title peoplePropertyFilter 数据结构
 * @description people Property Filter 字段。
 */
export type peoplePropertyFilter = any

/**
 * @title peoplePropertyItemObjectResponse 数据结构
 * @description people Property Item Object Response 字段。
 */
export type peoplePropertyItemObjectResponse = {
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title people 值
   * @description 人员引用。
   */
  people: any;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title personGroupByConfigRequest 数据结构
 * @description person Group By Config Request 字段。
 */
export type personGroupByConfigRequest = {
  /**
   * @title hide empty groups 值
   * @description hide empty groups 字段。
   */
  hide_empty_groups?: boolean;
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id: string;
  sort: groupSortRequest;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: 'person' | 'created_by' | 'last_edited_by';
}

/**
 * @title personGroupByConfigResponse 数据结构
 * @description person Group By Config Response 字段。
 */
export type personGroupByConfigResponse = {
  /**
   * @title hide empty groups 值
   * @description hide empty groups 字段。
   */
  hide_empty_groups?: boolean;
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id: string;
  /**
   * @title property name 值
   * @description property name 字段。
   */
  property_name?: string;
  sort: groupSortResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: 'person' | 'created_by' | 'last_edited_by';
}

/**
 * @title personIdOrMe 数据结构
 * @description person Id Or Me 字段。
 */
export type personIdOrMe = any

/**
 * @title personUserObjectResponse 数据结构
 * @description person User Object Response 字段。
 */
export type personUserObjectResponse = {
  /**
   * @title person 值
   * @description 人员用户资料。
   */
  person: {
    /**
     * @title email 值
     * @description 电子邮件地址。
     */
    email?: string;
    /**
     * @title email verified 值
     * @description email verified 字段。
     */
    email_verified?: boolean
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title phoneNumberDatabasePropertyConfigResponse 数据结构
 * @description phone Number Database Property Config Response 字段。
 */
export type phoneNumberDatabasePropertyConfigResponse = {
  phone_number: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title phoneNumberPropertyConfigurationRequest 数据结构
 * @description phone Number Property Configuration Request 字段。
 */
export type phoneNumberPropertyConfigurationRequest = {
  phone_number: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title phoneNumberPropertyItemObjectResponse 数据结构
 * @description phone Number Property Item Object Response 字段。
 */
export type phoneNumberPropertyItemObjectResponse = {
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title phone number 值
   * @description phone number 字段。
   */
  phone_number: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title phoneNumberSimplePropertyValueResponse 数据结构
 * @description phone Number Simple Property Value Response 字段。
 */
export type phoneNumberSimplePropertyValueResponse = {
  /**
   * @title phone number 值
   * @description phone number 字段。
   */
  phone_number: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title placePropertyConfigurationRequest 数据结构
 * @description place Property Configuration Request 字段。
 */
export type placePropertyConfigurationRequest = {
  place: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title placePropertyItemObjectResponse 数据结构
 * @description place Property Item Object Response 字段。
 */
export type placePropertyItemObjectResponse = {
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title place 值
   * @description place 字段。
   */
  place: {
    /**
     * @title address 值
     * @description address 字段。
     */
    address?: string;
    /**
     * @title aws place id 值
     * @description aws place id 字段。
     */
    aws_place_id?: string;
    /**
     * @title google place id 值
     * @description google place id 字段。
     */
    google_place_id?: string;
    /**
     * @title lat 值
     * @description lat 字段。
     */
    lat: number;
    /**
     * @title lon 值
     * @description lon 字段。
     */
    lon: number;
    /**
     * @title name 值
     * @description 名称。
     */
    name?: string
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title placePropertyValueResponse 数据结构
 * @description place Property Value Response 字段。
 */
export type placePropertyValueResponse = {
  /**
   * @title address 值
   * @description address 字段。
   */
  address?: string;
  /**
   * @title aws place id 值
   * @description aws place id 字段。
   */
  aws_place_id?: string;
  /**
   * @title google place id 值
   * @description google place id 字段。
   */
  google_place_id?: string;
  /**
   * @title lat 值
   * @description lat 字段。
   */
  lat: number;
  /**
   * @title lon 值
   * @description lon 字段。
   */
  lon: number;
  /**
   * @title name 值
   * @description 名称。
   */
  name?: string;
}

/**
 * @title placeSimplePropertyValueResponse 数据结构
 * @description place Simple Property Value Response 字段。
 */
export type placeSimplePropertyValueResponse = {
  /**
   * @title place 值
   * @description place 字段。
   */
  place: any;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title propertyConfigurationRequest 数据结构
 * @description property Configuration Request 字段。
 */
export type propertyConfigurationRequest = any

/**
 * @title propertyConfigurationRequestCommon 数据结构
 * @description property Configuration Request Common 字段。
 */
export type propertyConfigurationRequestCommon = {
  /**
   * @title description 值
   * @description 资源说明。
   */
  description?: any;
}

/**
 * @title propertyDescriptionRequest 数据结构
 * @description property Description Request 字段。
 */
export type propertyDescriptionRequest = string

/**
 * @title propertyFilter 数据结构
 * @description property Filter 字段。
 */
export type propertyFilter = any

/**
 * @title propertyItemListResponse 数据结构
 * @description property Item List Response 字段。
 */
export type propertyItemListResponse = {
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
   * @title property item 值
   * @description property item 字段。
   */
  property_item: any;
  /**
   * @title results 值
   * @description results 字段。
   */
  results: Array<propertyItemObjectResponse>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title propertyItemObjectResponse 数据结构
 * @description 页面属性项响应。
 */
export type propertyItemObjectResponse = any

/**
 * @title propertyItemPropertyItemListResponse 数据结构
 * @description property Item Property Item List Response 字段。
 */
export type propertyItemPropertyItemListResponse = {
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
   * @title property item 值
   * @description property item 字段。
   */
  property_item: any;
  /**
   * @title results 值
   * @description results 字段。
   */
  results: Array<propertyItemObjectResponse>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title propertyOrTimestampFilter 数据结构
 * @description property Or Timestamp Filter 字段。
 */
export type propertyOrTimestampFilter = any

/**
 * @title propertyOrTimestampFilterArray 数据结构
 * @description property Or Timestamp Filter Array 字段。
 */
export type propertyOrTimestampFilterArray = Array<propertyOrTimestampFilter>

/**
 * @title propertySortResponse 数据结构
 * @description property Sort Response 字段。
 */
export type propertySortResponse = {
  /**
   * @title direction 值
   * @description direction 字段。
   */
  direction: 'ascending' | 'descending';
  /**
   * @title property 值
   * @description property 字段。
   */
  property: string;
}

/**
 * @title publicApiAsyncTaskStatusResultJsonValue 数据结构
 * @description public Api Async Task Status Result Json Value 字段。
 */
export type publicApiAsyncTaskStatusResultJsonValue = any

/**
 * @title publicApiCommonErrorResponse 数据结构
 * @description 公共 API 通用错误响应。
 */
export type publicApiCommonErrorResponse = {
  /**
   * @title additional data 值
   * @description 附加数据。
   */
  additional_data?: Record<any, any>;
  /**
   * @title message 值
   * @description 错误消息。
   */
  message: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
}

/**
 * @title quickFilterConditionRequest 数据结构
 * @description quick Filter Condition Request 字段。
 */
export type quickFilterConditionRequest = any

/**
 * @title quickFilterConditionResponse 数据结构
 * @description quick Filter Condition Response 字段。
 */
export type quickFilterConditionResponse = any

/**
 * @title quoteBlockObjectResponse 数据结构
 * @description quote Block Object Response 字段。
 */
export type quoteBlockObjectResponse = {
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  quote: contentWithRichTextAndColorResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title relationArrayBasedPropertyValueResponse 数据结构
 * @description relation Array Based Property Value Response 字段。
 */
export type relationArrayBasedPropertyValueResponse = {
  /**
   * @title relation 值
   * @description 关系引用。
   */
  relation: Array<relationItemPropertyValueResponse>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title relationDatabasePropertyConfigResponse 数据结构
 * @description relation Database Property Config Response 字段。
 */
export type relationDatabasePropertyConfigResponse = {
  relation: databasePropertyRelationConfigResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title relationGroupByConfigRequest 数据结构
 * @description relation Group By Config Request 字段。
 */
export type relationGroupByConfigRequest = {
  /**
   * @title hide empty groups 值
   * @description hide empty groups 字段。
   */
  hide_empty_groups?: boolean;
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id: string;
  sort: groupSortRequest;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title relationGroupByConfigResponse 数据结构
 * @description relation Group By Config Response 字段。
 */
export type relationGroupByConfigResponse = {
  /**
   * @title hide empty groups 值
   * @description hide empty groups 字段。
   */
  hide_empty_groups?: boolean;
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id: string;
  /**
   * @title property name 值
   * @description property name 字段。
   */
  property_name?: string;
  sort: groupSortResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title relationItemPropertyValueResponse 数据结构
 * @description relation Item Property Value Response 字段。
 */
export type relationItemPropertyValueResponse = {
  id: idRequest;
}

/**
 * @title relationPropertyConfigurationRequest 数据结构
 * @description relation Property Configuration Request 字段。
 */
export type relationPropertyConfigurationRequest = {
  /**
   * @title relation 值
   * @description 关系引用。
   */
  relation: any;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title relationPropertyFilter 数据结构
 * @description relation Property Filter 字段。
 */
export type relationPropertyFilter = any

/**
 * @title relationPropertyItemObjectResponse 数据结构
 * @description relation Property Item Object Response 字段。
 */
export type relationPropertyItemObjectResponse = {
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title relation 值
   * @description 关系引用。
   */
  relation: {
    /**
     * @title id 值
     * @description 资源的 UUID v4 标识符。
     */
    id: string
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title relativeDateValue 数据结构
 * @description relative Date Value 字段。
 */
export type relativeDateValue = 'today' | 'tomorrow' | 'yesterday' | 'one_week_ago' | 'one_week_from_now' | 'one_month_ago' | 'one_month_from_now'

/**
 * @title requestStatusResponse 数据结构
 * @description request Status Response 字段。
 */
export type requestStatusResponse = {
  /**
   * @title incomplete reason 值
   * @description incomplete reason 字段。
   */
  incomplete_reason?: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: 'complete' | 'incomplete';
}

/**
 * @title richTextArrayBasedPropertyValueResponse 数据结构
 * @description rich Text Array Based Property Value Response 字段。
 */
export type richTextArrayBasedPropertyValueResponse = {
  /**
   * @title rich text 值
   * @description 富文本项列表。
   */
  rich_text: Array<richTextItemResponse>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title richTextDatabasePropertyConfigResponse 数据结构
 * @description rich Text Database Property Config Response 字段。
 */
export type richTextDatabasePropertyConfigResponse = {
  rich_text: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title richTextItemRequest 数据结构
 * @description 富文本项请求。
 */
export type richTextItemRequest = any

/**
 * @title richTextItemRequestCommon 数据结构
 * @description rich Text Item Request Common 字段。
 */
export type richTextItemRequestCommon = {
  annotations?: annotationRequest;
}

/**
 * @title richTextItemResponse 数据结构
 * @description 富文本项响应。
 */
export type richTextItemResponse = any

/**
 * @title richTextItemResponseCommon 数据结构
 * @description rich Text Item Response Common 字段。
 */
export type richTextItemResponseCommon = {
  annotations: annotationResponse;
  /**
   * @title href 值
   * @description 链接地址。
   */
  href: string;
  /**
   * @title plain text 值
   * @description 去样式后的纯文本。
   */
  plain_text: string;
}

/**
 * @title richTextPropertyConfigurationRequest 数据结构
 * @description rich Text Property Configuration Request 字段。
 */
export type richTextPropertyConfigurationRequest = {
  rich_text: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title richTextPropertyItemObjectResponse 数据结构
 * @description rich Text Property Item Object Response 字段。
 */
export type richTextPropertyItemObjectResponse = {
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  rich_text: richTextItemResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title rollupDatabasePropertyConfigResponse 数据结构
 * @description rollup Database Property Config Response 字段。
 */
export type rollupDatabasePropertyConfigResponse = {
  /**
   * @title rollup 值
   * @description 汇总值。
   */
  rollup: {
    function: rollupFunction;
    /**
     * @title relation property id 值
     * @description relation property id 字段。
     */
    relation_property_id: string;
    /**
     * @title relation property name 值
     * @description relation property name 字段。
     */
    relation_property_name: string;
    /**
     * @title rollup property id 值
     * @description rollup property id 字段。
     */
    rollup_property_id: string;
    /**
     * @title rollup property name 值
     * @description rollup property name 字段。
     */
    rollup_property_name: string
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title rollupFunction 数据结构
 * @description rollup Function 字段。
 */
export type rollupFunction = 'count' | 'count_values' | 'empty' | 'not_empty' | 'unique' | 'show_unique' | 'percent_empty' | 'percent_not_empty' | 'sum' | 'average' | 'median' | 'min' | 'max' | 'range' | 'earliest_date' | 'latest_date' | 'date_range' | 'checked' | 'unchecked' | 'percent_checked' | 'percent_unchecked' | 'count_per_group' | 'percent_per_group' | 'show_original'

/**
 * @title rollupPropertyConfigurationRequest 数据结构
 * @description rollup Property Configuration Request 字段。
 */
export type rollupPropertyConfigurationRequest = {
  /**
   * @title rollup 值
   * @description 汇总值。
   */
  rollup: any;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title rollupPropertyFilter 数据结构
 * @description rollup Property Filter 字段。
 */
export type rollupPropertyFilter = any

/**
 * @title rollupPropertyItemObjectResponse 数据结构
 * @description rollup Property Item Object Response 字段。
 */
export type rollupPropertyItemObjectResponse = {
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title rollup 值
   * @description 汇总值。
   */
  rollup: any;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title rollupSubfilterPropertyFilter 数据结构
 * @description rollup Subfilter Property Filter 字段。
 */
export type rollupSubfilterPropertyFilter = any

/**
 * @title selectColor 数据结构
 * @description select Color 字段。
 */
export type selectColor = 'default' | 'gray' | 'brown' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple' | 'pink' | 'red'

/**
 * @title selectDatabasePropertyConfigResponse 数据结构
 * @description select Database Property Config Response 字段。
 */
export type selectDatabasePropertyConfigResponse = {
  /**
   * @title select 值
   * @description 单选选项。
   */
  select: {
    /**
     * @title options 值
     * @description 选项列表。
     */
    options: Array<selectPropertyResponse>
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title selectGroupByConfigRequest 数据结构
 * @description select Group By Config Request 字段。
 */
export type selectGroupByConfigRequest = {
  /**
   * @title hide empty groups 值
   * @description hide empty groups 字段。
   */
  hide_empty_groups?: boolean;
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id: string;
  sort: groupSortRequest;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: 'select' | 'multi_select';
}

/**
 * @title selectGroupByConfigResponse 数据结构
 * @description select Group By Config Response 字段。
 */
export type selectGroupByConfigResponse = {
  /**
   * @title hide empty groups 值
   * @description hide empty groups 字段。
   */
  hide_empty_groups?: boolean;
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id: string;
  /**
   * @title property name 值
   * @description property name 字段。
   */
  property_name?: string;
  sort: groupSortResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: 'select' | 'multi_select';
}

/**
 * @title selectPropertyConfigurationRequest 数据结构
 * @description select Property Configuration Request 字段。
 */
export type selectPropertyConfigurationRequest = {
  /**
   * @title select 值
   * @description 单选选项。
   */
  select: {
    /**
     * @title options 值
     * @description 选项列表。
     */
    options?: Array<{
      color?: selectColor;
      /**
       * @title description 值
       * @description 资源说明。
       */
      description?: string;
      /**
       * @title name 值
       * @description 名称。
       */
      name: string
    }>
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title selectPropertyFilter 数据结构
 * @description select Property Filter 字段。
 */
export type selectPropertyFilter = any

/**
 * @title selectPropertyItemObjectResponse 数据结构
 * @description select Property Item Object Response 字段。
 */
export type selectPropertyItemObjectResponse = {
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title select 值
   * @description 单选选项。
   */
  select: any;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title selectPropertyResponse 数据结构
 * @description select Property Response 字段。
 */
export type selectPropertyResponse = {
  color: selectColor;
  /**
   * @title description 值
   * @description 资源说明。
   */
  description: string;
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title name 值
   * @description 名称。
   */
  name: string;
}

/**
 * @title selectSimplePropertyValueResponse 数据结构
 * @description select Simple Property Value Response 字段。
 */
export type selectSimplePropertyValueResponse = {
  /**
   * @title select 值
   * @description 单选选项。
   */
  select: any;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title simpleOrArrayPropertyValueResponse 数据结构
 * @description simple Or Array Property Value Response 字段。
 */
export type simpleOrArrayPropertyValueResponse = any

/**
 * @title simplePropertyValueResponse 数据结构
 * @description simple Property Value Response 字段。
 */
export type simplePropertyValueResponse = any

/**
 * @title singlePropertyDatabasePropertyRelationConfigResponse 数据结构
 * @description single Property Database Property Relation Config Response 字段。
 */
export type singlePropertyDatabasePropertyRelationConfigResponse = {
  single_property: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title sortDirectionRequest 数据结构
 * @description sort Direction Request 字段。
 */
export type sortDirectionRequest = 'ascending' | 'descending'

/**
 * @title statusDatabasePropertyConfigResponse 数据结构
 * @description status Database Property Config Response 字段。
 */
export type statusDatabasePropertyConfigResponse = {
  /**
   * @title status 值
   * @description HTTP 状态码。
   */
  status: {
    /**
     * @title groups 值
     * @description groups 字段。
     */
    groups: Array<{
      color: selectColor;
      /**
       * @title id 值
       * @description 资源的 UUID v4 标识符。
       */
      id: string;
      /**
       * @title name 值
       * @description 名称。
       */
      name: string;
      /**
       * @title option ids 值
       * @description option ids 字段。
       */
      option_ids: Array<string>
    }>;
    /**
     * @title options 值
     * @description 选项列表。
     */
    options: Array<statusPropertyResponse>
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title statusGroupByConfigRequest 数据结构
 * @description status Group By Config Request 字段。
 */
export type statusGroupByConfigRequest = {
  /**
   * @title group by 值
   * @description group by 字段。
   */
  group_by: 'group' | 'option';
  /**
   * @title hide empty groups 值
   * @description hide empty groups 字段。
   */
  hide_empty_groups?: boolean;
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id: string;
  sort: groupSortRequest;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title statusGroupByConfigResponse 数据结构
 * @description status Group By Config Response 字段。
 */
export type statusGroupByConfigResponse = {
  /**
   * @title group by 值
   * @description group by 字段。
   */
  group_by: 'group' | 'option';
  /**
   * @title hide empty groups 值
   * @description hide empty groups 字段。
   */
  hide_empty_groups?: boolean;
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id: string;
  /**
   * @title property name 值
   * @description property name 字段。
   */
  property_name?: string;
  sort: groupSortResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title statusOptionGroup 数据结构
 * @description status Option Group 字段。
 */
export type statusOptionGroup = 'To-do' | 'In progress' | 'Complete'

/**
 * @title statusOptionRequest 数据结构
 * @description status Option Request 字段。
 */
export type statusOptionRequest = {
  color?: selectColor;
  /**
   * @title description 值
   * @description 资源说明。
   */
  description?: string;
  group?: statusOptionGroup;
  /**
   * @title name 值
   * @description 名称。
   */
  name: string;
}

/**
 * @title statusOptionRequestArray 数据结构
 * @description status Option Request Array 字段。
 */
export type statusOptionRequestArray = Array<statusOptionRequest>

/**
 * @title statusOptionUpdateRequest 数据结构
 * @description status Option Update Request 字段。
 */
export type statusOptionUpdateRequest = any

/**
 * @title statusOptionUpdateRequestArray 数据结构
 * @description status Option Update Request Array 字段。
 */
export type statusOptionUpdateRequestArray = Array<statusOptionUpdateRequest>

/**
 * @title statusOptionUpdateRequestCommon 数据结构
 * @description status Option Update Request Common 字段。
 */
export type statusOptionUpdateRequestCommon = {
  color?: selectColor;
  /**
   * @title description 值
   * @description 资源说明。
   */
  description?: string;
  group?: statusOptionGroup;
}

/**
 * @title statusPropertyConfigRequest 数据结构
 * @description status Property Config Request 字段。
 */
export type statusPropertyConfigRequest = {
  options?: statusOptionRequestArray;
}

/**
 * @title statusPropertyConfigUpdateRequest 数据结构
 * @description status Property Config Update Request 字段。
 */
export type statusPropertyConfigUpdateRequest = {
  options?: statusOptionUpdateRequestArray;
}

/**
 * @title statusPropertyConfigurationRequest 数据结构
 * @description status Property Configuration Request 字段。
 */
export type statusPropertyConfigurationRequest = {
  status: statusPropertyConfigRequest;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title statusPropertyFilter 数据结构
 * @description status Property Filter 字段。
 */
export type statusPropertyFilter = any

/**
 * @title statusPropertyItemObjectResponse 数据结构
 * @description status Property Item Object Response 字段。
 */
export type statusPropertyItemObjectResponse = {
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title status 值
   * @description HTTP 状态码。
   */
  status: any;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title statusPropertyResponse 数据结构
 * @description status Property Response 字段。
 */
export type statusPropertyResponse = {
  color: selectColor;
  /**
   * @title description 值
   * @description 资源说明。
   */
  description: string;
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title name 值
   * @description 名称。
   */
  name: string;
}

/**
 * @title statusSimplePropertyValueResponse 数据结构
 * @description status Simple Property Value Response 字段。
 */
export type statusSimplePropertyValueResponse = {
  /**
   * @title status 值
   * @description HTTP 状态码。
   */
  status: any;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title stringFormulaPropertyResponse 数据结构
 * @description string Formula Property Response 字段。
 */
export type stringFormulaPropertyResponse = {
  /**
   * @title string 值
   * @description string 字段。
   */
  string: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title stringFormulaPropertyValueResponse 数据结构
 * @description string Formula Property Value Response 字段。
 */
export type stringFormulaPropertyValueResponse = {
  /**
   * @title string 值
   * @description string 字段。
   */
  string: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title stringOrStringArray 数据结构
 * @description string Or String Array 字段。
 */
export type stringOrStringArray = any

/**
 * @title stringRequest 数据结构
 * @description string Request 字段。
 */
export type stringRequest = string

/**
 * @title subtaskConfigRequest 数据结构
 * @description subtask Config Request 字段。
 */
export type subtaskConfigRequest = {
  /**
   * @title display mode 值
   * @description display mode 字段。
   */
  display_mode?: 'show' | 'hidden' | 'flattened' | 'disabled';
  /**
   * @title filter scope 值
   * @description filter scope 字段。
   */
  filter_scope?: 'parents' | 'parents_and_subitems' | 'subitems';
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id?: string;
  /**
   * @title toggle column id 值
   * @description toggle column id 字段。
   */
  toggle_column_id?: string;
}

/**
 * @title subtaskConfigResponse 数据结构
 * @description subtask Config Response 字段。
 */
export type subtaskConfigResponse = {
  /**
   * @title display mode 值
   * @description display mode 字段。
   */
  display_mode?: 'show' | 'hidden' | 'flattened' | 'disabled';
  /**
   * @title filter scope 值
   * @description filter scope 字段。
   */
  filter_scope?: 'parents' | 'parents_and_subitems' | 'subitems';
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id?: string;
  /**
   * @title toggle column id 值
   * @description toggle column id 字段。
   */
  toggle_column_id?: string;
}

/**
 * @title syncedBlockBlockObjectResponse 数据结构
 * @description synced Block Block Object Response 字段。
 */
export type syncedBlockBlockObjectResponse = {
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title synced block 值
   * @description synced block 字段。
   */
  synced_block: {
    /**
     * @title synced from 值
     * @description synced from 字段。
     */
    synced_from: {
      block_id: idRequest;
      /**
       * @title type 值
       * @description 对象或块类型。
       */
      type: string
    }
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title tabBlockObjectResponse 数据结构
 * @description tab Block Object Response 字段。
 */
export type tabBlockObjectResponse = {
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  tab: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title tabItemRequestWithSingleLevelOfChildren 数据结构
 * @description tab Item Request With Single Level Of Children 字段。
 */
export type tabItemRequestWithSingleLevelOfChildren = {
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object?: string;
  paragraph: paragraphWithSingleLevelOfChildrenRequest;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title tabItemRequestWithoutChildren 数据结构
 * @description tab Item Request Without Children 字段。
 */
export type tabItemRequestWithoutChildren = {
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object?: string;
  paragraph: contentWithRichTextColorAndIconRequest;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title tabRequestWithNestedTabItemChildren 数据结构
 * @description tab Request With Nested Tab Item Children 字段。
 */
export type tabRequestWithNestedTabItemChildren = {
  /**
   * @title children 值
   * @description 子块列表。
   */
  children: Array<tabItemRequestWithSingleLevelOfChildren>;
}

/**
 * @title tabRequestWithTabItemChildren 数据结构
 * @description tab Request With Tab Item Children 字段。
 */
export type tabRequestWithTabItemChildren = {
  /**
   * @title children 值
   * @description 子块列表。
   */
  children: Array<tabItemRequestWithoutChildren>;
}

/**
 * @title tableBlockObjectResponse 数据结构
 * @description table Block Object Response 字段。
 */
export type tableBlockObjectResponse = {
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  table: contentWithTableResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title tableOfContentsBlockObjectResponse 数据结构
 * @description table Of Contents Block Object Response 字段。
 */
export type tableOfContentsBlockObjectResponse = {
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title table of contents 值
   * @description table of contents 字段。
   */
  table_of_contents: {
    color: apiColor
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title tableRequestWithTableRowChildren 数据结构
 * @description table Request With Table Row Children 字段。
 */
export type tableRequestWithTableRowChildren = {
  /**
   * @title children 值
   * @description 子块列表。
   */
  children: Array<tableRowRequest>;
  /**
   * @title has column header 值
   * @description has column header 字段。
   */
  has_column_header?: boolean;
  /**
   * @title has row header 值
   * @description has row header 字段。
   */
  has_row_header?: boolean;
  /**
   * @title table width 值
   * @description table width 字段。
   */
  table_width: number;
}

/**
 * @title tableRowBlockObjectResponse 数据结构
 * @description table Row Block Object Response 字段。
 */
export type tableRowBlockObjectResponse = {
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  table_row: contentWithTableRowResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title tableRowRequest 数据结构
 * @description table Row Request 字段。
 */
export type tableRowRequest = {
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object?: string;
  table_row: contentWithTableRowRequest;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title tableViewConfigRequest 数据结构
 * @description table View Config Request 字段。
 */
export type tableViewConfigRequest = {
  /**
   * @title frozen column index 值
   * @description frozen column index 字段。
   */
  frozen_column_index?: number;
  /**
   * @title group by 值
   * @description group by 字段。
   */
  group_by?: any;
  /**
   * @title properties 值
   * @description 页面属性值或数据源属性模式。
   */
  properties?: Array<viewPropertyConfigRequest>;
  /**
   * @title show vertical lines 值
   * @description show vertical lines 字段。
   */
  show_vertical_lines?: boolean;
  /**
   * @title subtasks 值
   * @description subtasks 字段。
   */
  subtasks?: any;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
  /**
   * @title wrap cells 值
   * @description wrap cells 字段。
   */
  wrap_cells?: boolean;
}

/**
 * @title tableViewConfigResponse 数据结构
 * @description table View Config Response 字段。
 */
export type tableViewConfigResponse = {
  /**
   * @title frozen column index 值
   * @description frozen column index 字段。
   */
  frozen_column_index?: number;
  group_by?: groupByConfigResponse;
  /**
   * @title properties 值
   * @description 页面属性值或数据源属性模式。
   */
  properties?: Array<viewPropertyConfigResponse>;
  /**
   * @title show vertical lines 值
   * @description show vertical lines 字段。
   */
  show_vertical_lines?: boolean;
  subtasks?: subtaskConfigResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
  /**
   * @title wrap cells 值
   * @description wrap cells 字段。
   */
  wrap_cells?: boolean;
}

/**
 * @title templateBlockObjectResponse 数据结构
 * @description template Block Object Response 字段。
 */
export type templateBlockObjectResponse = {
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title template 值
   * @description template 字段。
   */
  template: {
    /**
     * @title rich text 值
     * @description 富文本项列表。
     */
    rich_text: Array<richTextItemResponse>
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title templateMentionDateTemplateMentionRequest 数据结构
 * @description template Mention Date Template Mention Request 字段。
 */
export type templateMentionDateTemplateMentionRequest = {
  /**
   * @title template mention date 值
   * @description template mention date 字段。
   */
  template_mention_date: 'today' | 'now';
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title templateMentionDateTemplateMentionResponse 数据结构
 * @description template Mention Date Template Mention Response 字段。
 */
export type templateMentionDateTemplateMentionResponse = {
  /**
   * @title template mention date 值
   * @description template mention date 字段。
   */
  template_mention_date: 'today' | 'now';
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title templateMentionRequest 数据结构
 * @description template Mention Request 字段。
 */
export type templateMentionRequest = any

/**
 * @title templateMentionResponse 数据结构
 * @description template Mention Response 字段。
 */
export type templateMentionResponse = any

/**
 * @title templateMentionUserTemplateMentionRequest 数据结构
 * @description template Mention User Template Mention Request 字段。
 */
export type templateMentionUserTemplateMentionRequest = {
  /**
   * @title template mention user 值
   * @description template mention user 字段。
   */
  template_mention_user: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title templateMentionUserTemplateMentionResponse 数据结构
 * @description template Mention User Template Mention Response 字段。
 */
export type templateMentionUserTemplateMentionResponse = {
  /**
   * @title template mention user 值
   * @description template mention user 字段。
   */
  template_mention_user: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title templateTimezone 数据结构
 * @description template Timezone 字段。
 */
export type templateTimezone = string

/**
 * @title textGroupByConfigRequest 数据结构
 * @description text Group By Config Request 字段。
 */
export type textGroupByConfigRequest = {
  /**
   * @title group by 值
   * @description group by 字段。
   */
  group_by: 'exact' | 'alphabet_prefix';
  /**
   * @title hide empty groups 值
   * @description hide empty groups 字段。
   */
  hide_empty_groups?: boolean;
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id: string;
  sort: groupSortRequest;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: 'text' | 'title' | 'url' | 'email' | 'phone_number';
}

/**
 * @title textGroupByConfigResponse 数据结构
 * @description text Group By Config Response 字段。
 */
export type textGroupByConfigResponse = {
  /**
   * @title group by 值
   * @description group by 字段。
   */
  group_by: 'exact' | 'alphabet_prefix';
  /**
   * @title hide empty groups 值
   * @description hide empty groups 字段。
   */
  hide_empty_groups?: boolean;
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id: string;
  /**
   * @title property name 值
   * @description property name 字段。
   */
  property_name?: string;
  sort: groupSortResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: 'text' | 'title' | 'url' | 'email' | 'phone_number';
}

/**
 * @title textPropertyFilter 数据结构
 * @description text Property Filter 字段。
 */
export type textPropertyFilter = any

/**
 * @title textRequest 数据结构
 * @description text Request 字段。
 */
export type textRequest = string

/**
 * @title textRichTextItemRequest 数据结构
 * @description text Rich Text Item Request 字段。
 */
export type textRichTextItemRequest = {
  /**
   * @title text 值
   * @description 纯文本内容。
   */
  text: {
    /**
     * @title content 值
     * @description 文本内容。
     */
    content: string;
    /**
     * @title link 值
     * @description 文本链接。
     */
    link?: {
      /**
       * @title url 值
       * @description 资源在 Notion 中的打开链接。
       */
      url: string
    }
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title textRichTextItemResponse 数据结构
 * @description text Rich Text Item Response 字段。
 */
export type textRichTextItemResponse = {
  /**
   * @title text 值
   * @description 纯文本内容。
   */
  text: {
    /**
     * @title content 值
     * @description 文本内容。
     */
    content: string;
    /**
     * @title link 值
     * @description 文本链接。
     */
    link: {
      /**
       * @title url 值
       * @description 资源在 Notion 中的打开链接。
       */
      url: string
    }
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title timeZoneRequest 数据结构
 * @description time Zone Request 字段。
 */
export type timeZoneRequest = string

/**
 * @title timelineArrowsByRequest 数据结构
 * @description timeline Arrows By Request 字段。
 */
export type timelineArrowsByRequest = {
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id?: string;
}

/**
 * @title timelineArrowsByResponse 数据结构
 * @description timeline Arrows By Response 字段。
 */
export type timelineArrowsByResponse = {
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id?: string;
}

/**
 * @title timelinePreferenceRequest 数据结构
 * @description timeline Preference Request 字段。
 */
export type timelinePreferenceRequest = {
  /**
   * @title center timestamp 值
   * @description center timestamp 字段。
   */
  center_timestamp?: number;
  /**
   * @title zoom level 值
   * @description zoom level 字段。
   */
  zoom_level: 'hours' | 'day' | 'week' | 'bi_week' | 'month' | 'quarter' | 'year' | '5_years';
}

/**
 * @title timelinePreferenceResponse 数据结构
 * @description timeline Preference Response 字段。
 */
export type timelinePreferenceResponse = {
  /**
   * @title center timestamp 值
   * @description center timestamp 字段。
   */
  center_timestamp?: number;
  /**
   * @title zoom level 值
   * @description zoom level 字段。
   */
  zoom_level: 'hours' | 'day' | 'week' | 'bi_week' | 'month' | 'quarter' | 'year' | '5_years';
}

/**
 * @title timelineViewConfigRequest 数据结构
 * @description timeline View Config Request 字段。
 */
export type timelineViewConfigRequest = {
  /**
   * @title arrows by 值
   * @description arrows by 字段。
   */
  arrows_by?: any;
  /**
   * @title color by 值
   * @description color by 字段。
   */
  color_by?: boolean;
  /**
   * @title date property id 值
   * @description date property id 字段。
   */
  date_property_id: string;
  /**
   * @title end date property id 值
   * @description end date property id 字段。
   */
  end_date_property_id?: string;
  /**
   * @title preference 值
   * @description preference 字段。
   */
  preference?: any;
  /**
   * @title properties 值
   * @description 页面属性值或数据源属性模式。
   */
  properties?: Array<viewPropertyConfigRequest>;
  /**
   * @title show table 值
   * @description show table 字段。
   */
  show_table?: boolean;
  /**
   * @title table properties 值
   * @description table properties 字段。
   */
  table_properties?: Array<viewPropertyConfigRequest>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title timelineViewConfigResponse 数据结构
 * @description timeline View Config Response 字段。
 */
export type timelineViewConfigResponse = {
  arrows_by?: timelineArrowsByResponse;
  /**
   * @title color by 值
   * @description color by 字段。
   */
  color_by?: boolean;
  /**
   * @title date property id 值
   * @description date property id 字段。
   */
  date_property_id: string;
  /**
   * @title date property name 值
   * @description date property name 字段。
   */
  date_property_name?: string;
  /**
   * @title end date property id 值
   * @description end date property id 字段。
   */
  end_date_property_id?: string;
  /**
   * @title end date property name 值
   * @description end date property name 字段。
   */
  end_date_property_name?: string;
  preference?: timelinePreferenceResponse;
  /**
   * @title properties 值
   * @description 页面属性值或数据源属性模式。
   */
  properties?: Array<viewPropertyConfigResponse>;
  /**
   * @title show table 值
   * @description show table 字段。
   */
  show_table?: boolean;
  /**
   * @title table properties 值
   * @description table properties 字段。
   */
  table_properties?: Array<viewPropertyConfigResponse>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title timestampCreatedTimeFilter 数据结构
 * @description timestamp Created Time Filter 字段。
 */
export type timestampCreatedTimeFilter = {
  created_time: datePropertyFilter;
  /**
   * @title timestamp 值
   * @description timestamp 字段。
   */
  timestamp: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title timestampFilter 数据结构
 * @description timestamp Filter 字段。
 */
export type timestampFilter = any

/**
 * @title timestampLastEditedTimeFilter 数据结构
 * @description timestamp Last Edited Time Filter 字段。
 */
export type timestampLastEditedTimeFilter = {
  last_edited_time: datePropertyFilter;
  /**
   * @title timestamp 值
   * @description timestamp 字段。
   */
  timestamp: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title timestampSortResponse 数据结构
 * @description timestamp Sort Response 字段。
 */
export type timestampSortResponse = {
  /**
   * @title direction 值
   * @description direction 字段。
   */
  direction: 'ascending' | 'descending';
  /**
   * @title timestamp 值
   * @description timestamp 字段。
   */
  timestamp: 'created_time' | 'last_edited_time';
}

/**
 * @title titleArrayBasedPropertyValueResponse 数据结构
 * @description title Array Based Property Value Response 字段。
 */
export type titleArrayBasedPropertyValueResponse = {
  /**
   * @title title 值
   * @description 资源标题。
   */
  title: Array<richTextItemResponse>;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title titleDatabasePropertyConfigResponse 数据结构
 * @description title Database Property Config Response 字段。
 */
export type titleDatabasePropertyConfigResponse = {
  title: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title titleObjectResponse 数据结构
 * @description title Object Response 字段。
 */
export type titleObjectResponse = {
  /**
   * @title title 值
   * @description 资源标题。
   */
  title: string;
}

/**
 * @title titlePropertyConfigurationRequest 数据结构
 * @description title Property Configuration Request 字段。
 */
export type titlePropertyConfigurationRequest = {
  title: emptyObject;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
}

/**
 * @title titlePropertyItemObjectResponse 数据结构
 * @description title Property Item Object Response 字段。
 */
export type titlePropertyItemObjectResponse = {
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  title: richTextItemResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title toDoBlockObjectResponse 数据结构
 * @description to Do Block Object Response 字段。
 */
export type toDoBlockObjectResponse = {
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title to do 值
   * @description to do 字段。
   */
  to_do: {
    /**
     * @title checked 值
     * @description checked 字段。
     */
    checked: boolean;
    color: apiColor;
    /**
     * @title rich text 值
     * @description 富文本项列表。
     */
    rich_text: Array<richTextItemResponse>
  };
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title toggleBlockObjectResponse 数据结构
 * @description toggle Block Object Response 字段。
 */
export type toggleBlockObjectResponse = {
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  toggle: contentWithRichTextAndColorResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title transcriptionBlockResponse 数据结构
 * @description transcription Block Response 字段。
 */
export type transcriptionBlockResponse = {
  calendar_event?: transcriptionCalendarEventResponse;
  children?: transcriptionChildrenResponse;
  recording?: transcriptionRecordingResponse;
  status?: apiTranscriptionStatus;
  /**
   * @title title 值
   * @description 资源标题。
   */
  title?: Array<richTextItemResponse>;
}

/**
 * @title transcriptionCalendarEventResponse 数据结构
 * @description transcription Calendar Event Response 字段。
 */
export type transcriptionCalendarEventResponse = {
  /**
   * @title attendees 值
   * @description attendees 字段。
   */
  attendees?: Array<idRequest>;
  /**
   * @title end time 值
   * @description end time 字段。
   */
  end_time: string;
  /**
   * @title start time 值
   * @description start time 字段。
   */
  start_time: string;
}

/**
 * @title transcriptionChildrenResponse 数据结构
 * @description transcription Children Response 字段。
 */
export type transcriptionChildrenResponse = {
  notes_block_id?: idRequest;
  summary_block_id?: idRequest;
  transcript_block_id?: idRequest;
}

/**
 * @title transcriptionRecordingResponse 数据结构
 * @description transcription Recording Response 字段。
 */
export type transcriptionRecordingResponse = {
  /**
   * @title end time 值
   * @description end time 字段。
   */
  end_time?: string;
  /**
   * @title start time 值
   * @description start time 字段。
   */
  start_time?: string;
}

/**
 * @title uniqueIdDatabasePropertyConfigResponse 数据结构
 * @description unique Id Database Property Config Response 字段。
 */
export type uniqueIdDatabasePropertyConfigResponse = {
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
  /**
   * @title unique id 值
   * @description 唯一编号。
   */
  unique_id: {
    /**
     * @title prefix 值
     * @description prefix 字段。
     */
    prefix: string
  };
}

/**
 * @title uniqueIdPropertyConfigurationRequest 数据结构
 * @description unique Id Property Configuration Request 字段。
 */
export type uniqueIdPropertyConfigurationRequest = {
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
  /**
   * @title unique id 值
   * @description 唯一编号。
   */
  unique_id: {
    /**
     * @title prefix 值
     * @description prefix 字段。
     */
    prefix?: string
  };
}

/**
 * @title uniqueIdPropertyItemObjectResponse 数据结构
 * @description unique Id Property Item Object Response 字段。
 */
export type uniqueIdPropertyItemObjectResponse = {
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
  /**
   * @title unique id 值
   * @description 唯一编号。
   */
  unique_id: {
    /**
     * @title number 值
     * @description 数值。
     */
    number: number;
    /**
     * @title prefix 值
     * @description prefix 字段。
     */
    prefix: string
  };
}

/**
 * @title uniqueIdPropertyValueResponse 数据结构
 * @description unique Id Property Value Response 字段。
 */
export type uniqueIdPropertyValueResponse = {
  /**
   * @title number 值
   * @description 数值。
   */
  number: number;
  /**
   * @title prefix 值
   * @description prefix 字段。
   */
  prefix: string;
}

/**
 * @title uniqueIdSimplePropertyValueResponse 数据结构
 * @description unique Id Simple Property Value Response 字段。
 */
export type uniqueIdSimplePropertyValueResponse = {
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
  unique_id: uniqueIdPropertyValueResponse;
}

/**
 * @title unsupportedBlockObjectResponse 数据结构
 * @description unsupported Block Object Response 字段。
 */
export type unsupportedBlockObjectResponse = {
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
  /**
   * @title unsupported 值
   * @description unsupported 字段。
   */
  unsupported: {
    /**
     * @title block type 值
     * @description block type 字段。
     */
    block_type: string
  };
}

/**
 * @title unsupportedFormulaPropertyResponse 数据结构
 * @description unsupported Formula Property Response 字段。
 */
export type unsupportedFormulaPropertyResponse = {
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
  unsupported: emptyObject;
}

/**
 * @title unsupportedFormulaPropertyValueResponse 数据结构
 * @description unsupported Formula Property Value Response 字段。
 */
export type unsupportedFormulaPropertyValueResponse = {
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
  unsupported: emptyObject;
}

/**
 * @title unsupportedPartialRollupValueResponse 数据结构
 * @description unsupported Partial Rollup Value Response 字段。
 */
export type unsupportedPartialRollupValueResponse = {
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
  unsupported: emptyObject;
}

/**
 * @title updateEmbedFileUploadRequest 数据结构
 * @description update Embed File Upload Request 字段。
 */
export type updateEmbedFileUploadRequest = {
  /**
   * @title caption 值
   * @description caption 字段。
   */
  caption?: Array<richTextItemRequest>;
  file_upload: fileUploadIdRequest;
}

/**
 * @title updateMediaContentWithFileAndCaptionRequest 数据结构
 * @description update Media Content With File And Caption Request 字段。
 */
export type updateMediaContentWithFileAndCaptionRequest = {
  /**
   * @title caption 值
   * @description caption 字段。
   */
  caption?: Array<richTextItemRequest>;
  external?: externalFileRequest;
  file_upload?: fileUploadIdRequest;
}

/**
 * @title updateMediaContentWithFileNameAndCaptionRequest 数据结构
 * @description update Media Content With File Name And Caption Request 字段。
 */
export type updateMediaContentWithFileNameAndCaptionRequest = {
  /**
   * @title caption 值
   * @description caption 字段。
   */
  caption?: Array<richTextItemRequest>;
  external?: externalFileRequest;
  file_upload?: fileUploadIdRequest;
  name?: stringRequest;
}

/**
 * @title updateMediaContentWithUrlAndCaptionRequest 数据结构
 * @description update Media Content With Url And Caption Request 字段。
 */
export type updateMediaContentWithUrlAndCaptionRequest = {
  /**
   * @title caption 值
   * @description caption 字段。
   */
  caption?: Array<richTextItemRequest>;
  /**
   * @title url 值
   * @description 资源在 Notion 中的打开链接。
   */
  url?: string;
}

/**
 * @title updateViewRequest 数据结构
 * @description 更新视图请求。
 */
export type updateViewRequest = {
  configuration?: viewConfigRequest;
  /**
   * @title filter 值
   * @description 过滤条件。
   */
  filter?: any;
  /**
   * @title name 值
   * @description 名称。
   */
  name?: string;
  /**
   * @title quick filters 值
   * @description quick filters 字段。
   */
  quick_filters?: Record<any, any>;
  /**
   * @title sorts 值
   * @description sorts 字段。
   */
  sorts?: any;
}

/**
 * @title urlDatabasePropertyConfigResponse 数据结构
 * @description url Database Property Config Response 字段。
 */
export type urlDatabasePropertyConfigResponse = {
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
  url: emptyObject;
}

/**
 * @title urlPropertyConfigurationRequest 数据结构
 * @description url Property Configuration Request 字段。
 */
export type urlPropertyConfigurationRequest = {
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
  url: emptyObject;
}

/**
 * @title urlPropertyItemObjectResponse 数据结构
 * @description url Property Item Object Response 字段。
 */
export type urlPropertyItemObjectResponse = {
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
  /**
   * @title url 值
   * @description 资源在 Notion 中的打开链接。
   */
  url: string;
}

/**
 * @title urlSimplePropertyValueResponse 数据结构
 * @description url Simple Property Value Response 字段。
 */
export type urlSimplePropertyValueResponse = {
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
  /**
   * @title url 值
   * @description 资源在 Notion 中的打开链接。
   */
  url: string;
}

/**
 * @title userObjectResponse 数据结构
 * @description 用户对象响应。
 */
export type userObjectResponse = any

/**
 * @title userObjectResponseCommon 数据结构
 * @description user Object Response Common 字段。
 */
export type userObjectResponseCommon = {
  /**
   * @title avatar url 值
   * @description avatar url 字段。
   */
  avatar_url: string;
  id: idResponse;
  /**
   * @title name 值
   * @description 名称。
   */
  name: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
}

/**
 * @title userValueResponse 数据结构
 * @description user Value Response 字段。
 */
export type userValueResponse = any

/**
 * @title verificationPropertyConfigurationRequest 数据结构
 * @description verification Property Configuration Request 字段。
 */
export type verificationPropertyConfigurationRequest = {
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type?: string;
  verification: emptyObject;
}

/**
 * @title verificationPropertyDoesNotEqualFilter 数据结构
 * @description verification Property Does Not Equal Filter 字段。
 */
export type verificationPropertyDoesNotEqualFilter = {
  /**
   * @title does not equal 值
   * @description does not equal 字段。
   */
  does_not_equal: 'verified' | 'expired' | 'none';
}

/**
 * @title verificationPropertyItemObjectResponse 数据结构
 * @description verification Property Item Object Response 字段。
 */
export type verificationPropertyItemObjectResponse = {
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
  /**
   * @title verification 值
   * @description verification 字段。
   */
  verification: any;
}

/**
 * @title verificationPropertyResponse 数据结构
 * @description verification Property Response 字段。
 */
export type verificationPropertyResponse = {
  /**
   * @title date 值
   * @description 日期或时间。
   */
  date: any;
  /**
   * @title state 值
   * @description state 字段。
   */
  state: 'verified' | 'expired';
  /**
   * @title verified by 值
   * @description verified by 字段。
   */
  verified_by: any;
}

/**
 * @title verificationPropertyStatusFilter 数据结构
 * @description verification Property Status Filter 字段。
 */
export type verificationPropertyStatusFilter = {
  /**
   * @title status 值
   * @description HTTP 状态码。
   */
  status: 'verified' | 'expired' | 'none';
}

/**
 * @title verificationPropertyUnverifiedResponse 数据结构
 * @description verification Property Unverified Response 字段。
 */
export type verificationPropertyUnverifiedResponse = {
  /**
   * @title date 值
   * @description 日期或时间。
   */
  date: any;
  /**
   * @title state 值
   * @description state 字段。
   */
  state: string;
  /**
   * @title verified by 值
   * @description verified by 字段。
   */
  verified_by: any;
}

/**
 * @title verificationPropertyValueResponse 数据结构
 * @description verification Property Value Response 字段。
 */
export type verificationPropertyValueResponse = any

/**
 * @title verificationSimplePropertyValueResponse 数据结构
 * @description verification Simple Property Value Response 字段。
 */
export type verificationSimplePropertyValueResponse = {
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
  /**
   * @title verification 值
   * @description verification 字段。
   */
  verification: any;
}

/**
 * @title videoBlockObjectResponse 数据结构
 * @description video Block Object Response 字段。
 */
export type videoBlockObjectResponse = {
  created_by: partialUserObjectResponse;
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
  /**
   * @title id 值
   * @description 资源的 UUID v4 标识符。
   */
  id: string;
  /**
   * @title in trash 值
   * @description 资源是否在回收站。
   */
  in_trash: boolean;
  last_edited_by: partialUserObjectResponse;
  /**
   * @title last edited time 值
   * @description 最后编辑时间（ISO 8601）。
   */
  last_edited_time: string;
  /**
   * @title object 值
   * @description 资源对象类型。
   */
  object: string;
  parent: parentForBlockBasedObjectResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
  video: mediaContentWithFileAndCaptionResponse;
}

/**
 * @title viewConfigRequest 数据结构
 * @description view Config Request 字段。
 */
export type viewConfigRequest = any

/**
 * @title viewConfigResponse 数据结构
 * @description view Config Response 字段。
 */
export type viewConfigResponse = any

/**
 * @title viewCreatedWebhookPayload 数据结构
 * @description view Created Webhook Payload 字段。
 */
export type viewCreatedWebhookPayload = any

/**
 * @title viewDeletedWebhookPayload 数据结构
 * @description view Deleted Webhook Payload 字段。
 */
export type viewDeletedWebhookPayload = any

/**
 * @title viewFilterRequest 数据结构
 * @description view Filter Request 字段。
 */
export type viewFilterRequest = any

/**
 * @title viewFilterResponse 数据结构
 * @description view Filter Response 字段。
 */
export type viewFilterResponse = any

/**
 * @title viewPositionRequest 数据结构
 * @description view Position Request 字段。
 */
export type viewPositionRequest = any

/**
 * @title viewPropertyConfigRequest 数据结构
 * @description view Property Config Request 字段。
 */
export type viewPropertyConfigRequest = {
  /**
   * @title card property width mode 值
   * @description card property width mode 字段。
   */
  card_property_width_mode?: 'full_line' | 'inline';
  /**
   * @title date format 值
   * @description date format 字段。
   */
  date_format?: 'full' | 'short' | 'month_day_year' | 'day_month_year' | 'year_month_day' | 'relative';
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id: string;
  /**
   * @title status show as 值
   * @description status show as 字段。
   */
  status_show_as?: 'select' | 'checkbox';
  /**
   * @title time format 值
   * @description time format 字段。
   */
  time_format?: '12_hour' | '24_hour' | 'hidden';
  /**
   * @title visible 值
   * @description visible 字段。
   */
  visible?: boolean;
  /**
   * @title width 值
   * @description width 字段。
   */
  width?: number;
  /**
   * @title wrap 值
   * @description wrap 字段。
   */
  wrap?: boolean;
}

/**
 * @title viewPropertyConfigResponse 数据结构
 * @description view Property Config Response 字段。
 */
export type viewPropertyConfigResponse = {
  /**
   * @title card property width mode 值
   * @description card property width mode 字段。
   */
  card_property_width_mode?: 'full_line' | 'inline';
  /**
   * @title date format 值
   * @description date format 字段。
   */
  date_format?: 'full' | 'short' | 'month_day_year' | 'day_month_year' | 'year_month_day' | 'relative';
  /**
   * @title property id 值
   * @description 属性 ID。
   */
  property_id: string;
  /**
   * @title property name 值
   * @description property name 字段。
   */
  property_name?: string;
  /**
   * @title status show as 值
   * @description status show as 字段。
   */
  status_show_as?: 'select' | 'checkbox';
  /**
   * @title time format 值
   * @description time format 字段。
   */
  time_format?: '12_hour' | '24_hour' | 'hidden';
  /**
   * @title visible 值
   * @description visible 字段。
   */
  visible?: boolean;
  /**
   * @title width 值
   * @description width 字段。
   */
  width?: number;
  /**
   * @title wrap 值
   * @description wrap 字段。
   */
  wrap?: boolean;
}

/**
 * @title viewPropertySortRequest 数据结构
 * @description view Property Sort Request 字段。
 */
export type viewPropertySortRequest = {
  direction: sortDirectionRequest;
  /**
   * @title property 值
   * @description property 字段。
   */
  property: string;
}

/**
 * @title viewPropertySortsRequest 数据结构
 * @description view Property Sorts Request 字段。
 */
export type viewPropertySortsRequest = Array<viewPropertySortRequest>

/**
 * @title viewQueryResponse 数据结构
 * @description view Query Response 字段。
 */
export type viewQueryResponse = {
  /**
   * @title expires at 值
   * @description expires at 字段。
   */
  expires_at: string;
  /**
   * @title has more 值
   * @description 是否还有更多结果。
   */
  has_more: boolean;
  id: idResponse;
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
  request_status?: requestStatusResponse;
  /**
   * @title results 值
   * @description results 字段。
   */
  results: Array<pageReferenceResponse>;
  /**
   * @title total count 值
   * @description total count 字段。
   */
  total_count: number;
  view_id: idResponse;
}

/**
 * @title viewSortRequest 数据结构
 * @description view Sort Request 字段。
 */
export type viewSortRequest = any

/**
 * @title viewSortResponse 数据结构
 * @description view Sort Response 字段。
 */
export type viewSortResponse = any

/**
 * @title viewSortsRequest 数据结构
 * @description view Sorts Request 字段。
 */
export type viewSortsRequest = Array<viewSortRequest>

/**
 * @title viewTypeRequest 数据结构
 * @description view Type Request 字段。
 */
export type viewTypeRequest = 'table' | 'board' | 'list' | 'calendar' | 'timeline' | 'gallery' | 'form' | 'chart' | 'map' | 'dashboard'

/**
 * @title viewUpdatedWebhookPayload 数据结构
 * @description view Updated Webhook Payload 字段。
 */
export type viewUpdatedWebhookPayload = any

/**
 * @title webhookCommentEntity 数据结构
 * @description webhook Comment Entity 字段。
 */
export type webhookCommentEntity = {
  id: idResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title webhookDatabaseEventEntity 数据结构
 * @description webhook Database Event Entity 字段。
 */
export type webhookDatabaseEventEntity = {
  id: idResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: 'block' | 'database' | 'data_source';
}

/**
 * @title webhookExternalBlock 数据结构
 * @description webhook External Block 字段。
 */
export type webhookExternalBlock = {
  id: idResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: 'page' | 'database' | 'block';
}

/**
 * @title webhookFileUploadEntity 数据结构
 * @description webhook File Upload Entity 字段。
 */
export type webhookFileUploadEntity = {
  id: idResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title webhookPageEntity 数据结构
 * @description webhook Page Entity 字段。
 */
export type webhookPageEntity = {
  id: idResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title webhookParentBlock 数据结构
 * @description webhook Parent Block 字段。
 */
export type webhookParentBlock = {
  data_source_id?: idResponse;
  id: idResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: 'space' | 'block' | 'page' | 'database' | 'team' | 'agent';
}

/**
 * @title webhookUpdatedBlock 数据结构
 * @description webhook Updated Block 字段。
 */
export type webhookUpdatedBlock = {
  id: idResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: 'page' | 'database' | 'block';
}

/**
 * @title webhookViewEntity 数据结构
 * @description webhook View Entity 字段。
 */
export type webhookViewEntity = {
  id: idResponse;
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
}

/**
 * @title widgetPlacementRequest 数据结构
 * @description widget Placement Request 字段。
 */
export type widgetPlacementRequest = any

/**
 * @title workspaceParentForBlockBasedObjectResponse 数据结构
 * @description workspace Parent For Block Based Object Response 字段。
 */
export type workspaceParentForBlockBasedObjectResponse = {
  /**
   * @title type 值
   * @description 对象或块类型。
   */
  type: string;
  /**
   * @title workspace 值
   * @description 工作区信息。
   */
  workspace: boolean;
}