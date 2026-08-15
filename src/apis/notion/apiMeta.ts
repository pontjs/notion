export const specMeta = {
  name: "Notion API",
  hasTags: true,
  url: [
    {
      url: "https://api.notion.com"
    }
  ],
  apis: {
    "asyncTasks/retrieveAsyncTask": {
      method: "GET",
      path: "/v1/async_tasks/{task_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["task_id"],
      queryParams: null,
      bodyParams: null
    },

    "blocks/deleteBlock": {
      method: "DELETE",
      path: "/v1/blocks/{block_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["block_id"],
      queryParams: null,
      bodyParams: null
    },

    "blocks/getBlockChildren": {
      method: "GET",
      path: "/v1/blocks/{block_id}/children",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["block_id"],
      queryParams: ["start_cursor", "page_size"],
      bodyParams: null
    },

    "blocks/patchBlockChildren": {
      method: "PATCH",
      path: "/v1/blocks/{block_id}/children",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["block_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: true,
        fields: ["children", "position"]
      }
    },

    "blocks/retrieveBlock": {
      method: "GET",
      path: "/v1/blocks/{block_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["block_id"],
      queryParams: null,
      bodyParams: null
    },

    "blocks/updateBlock": {
      method: "PATCH",
      path: "/v1/blocks/{block_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["block_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "comments/createComment": {
      method: "POST",
      path: "/v1/comments",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "comments/deleteComment": {
      method: "DELETE",
      path: "/v1/comments/{comment_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["comment_id"],
      queryParams: null,
      bodyParams: null
    },

    "comments/listComments": {
      method: "GET",
      path: "/v1/comments",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["block_id", "start_cursor", "page_size"],
      bodyParams: null
    },

    "comments/retrieveComment": {
      method: "GET",
      path: "/v1/comments/{comment_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["comment_id"],
      queryParams: null,
      bodyParams: null
    },

    "comments/updateComment": {
      method: "PATCH",
      path: "/v1/comments/{comment_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["comment_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "customEmojis/listCustomEmojis": {
      method: "GET",
      path: "/v1/custom_emojis",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["start_cursor", "page_size", "name"],
      bodyParams: null
    },

    "dataSources/createDataSource": {
      method: "POST",
      path: "/v1/data_sources",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: true,
        fields: ["icon", "parent", "properties", "title"]
      }
    },

    "dataSources/listDataSourceTemplates": {
      method: "GET",
      path: "/v1/data_sources/{data_source_id}/templates",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["data_source_id"],
      queryParams: ["name", "start_cursor", "page_size"],
      bodyParams: null
    },

    "dataSources/queryDataSource": {
      method: "POST",
      path: "/v1/data_sources/{data_source_id}/query",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["data_source_id"],
      queryParams: ["filter_properties"],
      bodyParams: {
        contentType: "application/json",
        canMerge: true,
        fields: ["filter", "is_archived", "page_size", "result_type", "sorts", "start_cursor"]
      }
    },

    "dataSources/retrieveDataSource": {
      method: "GET",
      path: "/v1/data_sources/{data_source_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["data_source_id"],
      queryParams: null,
      bodyParams: null
    },

    "dataSources/updateDataSource": {
      method: "PATCH",
      path: "/v1/data_sources/{data_source_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["data_source_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: true,
        fields: ["icon", "in_trash", "parent", "properties", "title"]
      }
    },

    "databases/createDatabase": {
      method: "POST",
      path: "/v1/databases",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: true,
        fields: ["cover", "description", "icon", "initial_data_source", "is_inline", "parent", "title"]
      }
    },

    "databases/retrieveDatabase": {
      method: "GET",
      path: "/v1/databases/{database_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["database_id"],
      queryParams: null,
      bodyParams: null
    },

    "databases/updateDatabase": {
      method: "PATCH",
      path: "/v1/databases/{database_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["database_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: true,
        fields: ["cover", "description", "icon", "in_trash", "is_inline", "is_locked", "parent", "title"]
      }
    },

    "fileUploads/completeFileUpload": {
      method: "POST",
      path: "/v1/file_uploads/{file_upload_id}/complete",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["file_upload_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "fileUploads/createFileUpload": {
      method: "POST",
      path: "/v1/file_uploads",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: true,
        fields: ["content_type", "external_url", "filename", "mode", "number_of_parts"]
      }
    },

    "fileUploads/listFileUploads": {
      method: "GET",
      path: "/v1/file_uploads",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["status", "start_cursor", "page_size"],
      bodyParams: null
    },

    "fileUploads/retrieveFileUpload": {
      method: "GET",
      path: "/v1/file_uploads/{file_upload_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["file_upload_id"],
      queryParams: null,
      bodyParams: null
    },

    "fileUploads/uploadFilePart": {
      method: "POST",
      path: "/v1/file_uploads/{file_upload_id}/send",
      consumes: ["multipart/form-data"],
      produces: ["application/json"],
      pathParams: ["file_upload_id"],
      queryParams: null,
      bodyParams: {
        contentType: "multipart/form-data",
        canMerge: false
      }
    },

    "meetingNotes/createMeetingNote": {
      method: "POST",
      path: "/v1/blocks/meeting_notes",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "meetingNotes/queryMeetingNotes": {
      method: "POST",
      path: "/v1/blocks/meeting_notes/query",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: true,
        fields: ["filter", "limit", "sort"]
      }
    },

    "oAuth/createToken": {
      method: "POST",
      path: "/v1/oauth/token",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "oAuth/introspectToken": {
      method: "POST",
      path: "/v1/oauth/introspect",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: true,
        fields: ["token"]
      }
    },

    "oAuth/revokeToken": {
      method: "POST",
      path: "/v1/oauth/revoke",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: true,
        fields: ["token"]
      }
    },

    "pages/movePage": {
      method: "POST",
      path: "/v1/pages/{page_id}/move",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["page_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: true,
        fields: ["parent"]
      }
    },

    "pages/patchPage": {
      method: "PATCH",
      path: "/v1/pages/{page_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["page_id"],
      queryParams: ["filter_properties"],
      bodyParams: {
        contentType: "application/json",
        canMerge: true,
        fields: ["cover", "erase_content", "icon", "in_trash", "is_archived", "is_locked", "properties", "template"]
      }
    },

    "pages/postPage": {
      method: "POST",
      path: "/v1/pages",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["filter_properties"],
      bodyParams: {
        contentType: "application/json",
        canMerge: true,
        fields: ["allow_async", "children", "content", "cover", "icon", "markdown", "parent", "position", "properties", "template"]
      }
    },

    "pages/retrievePage": {
      method: "GET",
      path: "/v1/pages/{page_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["page_id"],
      queryParams: ["filter_properties"],
      bodyParams: null
    },

    "pages/retrievePageMarkdown": {
      method: "GET",
      path: "/v1/pages/{page_id}/markdown",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["page_id"],
      queryParams: ["include_transcript"],
      bodyParams: null
    },

    "pages/retrievePageProperty": {
      method: "GET",
      path: "/v1/pages/{page_id}/properties/{property_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["page_id", "property_id"],
      queryParams: ["start_cursor", "page_size"],
      bodyParams: null
    },

    "pages/updatePageMarkdown": {
      method: "PATCH",
      path: "/v1/pages/{page_id}/markdown",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["page_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "search/search": {
      method: "POST",
      path: "/v1/search",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: true,
        fields: ["filter", "page_size", "query", "sort", "start_cursor"]
      }
    },

    "users/getSelf": {
      method: "GET",
      path: "/v1/users/me",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: null
    },

    "users/getUser": {
      method: "GET",
      path: "/v1/users/{user_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["user_id"],
      queryParams: null,
      bodyParams: null
    },

    "users/getUsers": {
      method: "GET",
      path: "/v1/users",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["start_cursor", "page_size"],
      bodyParams: null
    },

    "views/createView": {
      method: "POST",
      path: "/v1/views",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: null,
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "views/createViewQuery": {
      method: "POST",
      path: "/v1/views/{view_id}/queries",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["view_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    },

    "views/deleteView": {
      method: "DELETE",
      path: "/v1/views/{view_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["view_id"],
      queryParams: null,
      bodyParams: null
    },

    "views/deleteViewQuery": {
      method: "DELETE",
      path: "/v1/views/{view_id}/queries/{query_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["view_id", "query_id"],
      queryParams: null,
      bodyParams: null
    },

    "views/getViewQueryResults": {
      method: "GET",
      path: "/v1/views/{view_id}/queries/{query_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["view_id", "query_id"],
      queryParams: ["start_cursor", "page_size"],
      bodyParams: null
    },

    "views/listViews": {
      method: "GET",
      path: "/v1/views",
      consumes: [],
      produces: ["application/json"],
      pathParams: null,
      queryParams: ["database_id", "data_source_id", "start_cursor", "page_size"],
      bodyParams: null
    },

    "views/retrieveView": {
      method: "GET",
      path: "/v1/views/{view_id}",
      consumes: [],
      produces: ["application/json"],
      pathParams: ["view_id"],
      queryParams: null,
      bodyParams: null
    },

    "views/updateView": {
      method: "PATCH",
      path: "/v1/views/{view_id}",
      consumes: ["application/json"],
      produces: ["application/json"],
      pathParams: ["view_id"],
      queryParams: null,
      bodyParams: {
        contentType: "application/json",
        canMerge: false
      }
    }
  }
} as const;
