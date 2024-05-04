export type JobResult = {
  job: {
    status: number;
    error: string;
    id: string;
    query_result_id: any;
    updated_at: number;
  };
};

export type EmptyResult = {};

export type QueryResult = {
  query_result: {
    retrieved_at: string;
    query_hash: string;
    query: string;
    runtime: number;
    data: any;
    id: number;
    data_source_id: number;
  };
};

export type Application = {
  createdAt: string;
  updated: string;
  id: string;
  name: string;
  author: string;
  rating: number;
  shouldDiff: boolean;
  electron: boolean;
  partnerId: number;
  anyviewName: string;
  deactivated: boolean;
};

export type RevenueStatisticsDashboard = {
  layout: Array<any>;
  name: string;
  created_at: string;
  updated_at: string;
  widgets: Array<{
    visualization: {
      name: string;
      created_at: string;
      updated_at: string;
      query: {
        description: string;
        options: {
          parameters: Array<{
            name: string;
            title: string;
            global: boolean;
            value: string;
            queryId?: number;
            parentQueryId: number;
            type: string;
            locals: Array<any>;
            enumOptions?: string;
            multiValuesOptions: any;
          }>;
        };
        id: number;
        name: string;
      };
      type: string;
      options: {
        tooltipFormat?: string;
        targetColName?: string;
        formatTargetValue?: boolean;
        rowNumber?: number;
        stringDecChar?: string;
        stringPrefix?: string;
        stringDecimal?: number;
        counterColName?: string;
        counterLabel?: string;
        stringThouSep?: string;
        targetRowNumber?: number;
        itemsPerPage?: number;
        columns?: Array<{
          linkUrlTemplate: string;
          name: string;
          title: string;
          imageUrlTemplate: string;
          linkOpenInNewTab: boolean;
          linkTextTemplate: string;
          allowSearch: boolean;
          allowHTML: boolean;
          imageTitleTemplate: string;
          imageWidth: string;
          visible: boolean;
          alignContent: string;
          imageHeight: string;
          order: number;
          displayAs: string;
          dateTimeFormat?: string;
          linkTitleTemplate: string;
          booleanValues: Array<string>;
          type: string;
          highlightLinks: boolean;
          numberFormat?: string;
        }>;
        showDataLabels?: boolean;
        direction?: {
          type: string;
        };
        missingValuesAsZero?: boolean;
        error_y?: {
          visible: boolean;
          type: string;
        };
        numberFormat?: string;
        yAxis?: Array<{
          type: string;
          title?: {
            text: string;
          };
          opposite?: boolean;
        }>;
        series?: {
          stacking: any;
          error_y: {
            visible: boolean;
            type: string;
          };
          percentValues?: boolean;
        };
        globalSeriesType?: string;
        percentFormat?: string;
        sortX?: boolean;
        seriesOptions?: {
          sum_impressions?: {
            zIndex: number;
            index: number;
            type: string;
            name: string;
            yAxis: number;
            color?: string;
          };
          sum_opportunities?: {
            index: number;
            name: string;
            yAxis: number;
            color: string;
            zIndex: number;
            type: string;
          };
          daily_video_net_revenue?: {
            index: number;
            name: string;
            yAxis: number;
            color: string;
            zIndex: number;
            type: string;
          };
          sum_inventory?: {
            index: number;
            name: string;
            yAxis: number;
            color: string;
            zIndex: number;
            type: string;
          };
          'All Windows'?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
            color?: string;
          };
          loading?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          stats?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          tftoverlay?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          tftloading?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          champselect?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          '-'?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          Benchmark?: {
            zIndex: number;
            index: number;
            type: string;
            color: string;
            yAxis: number;
          };
          live?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          home?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          lobby?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          Canada?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          Turkey?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          Romania?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          Australia?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          Italy?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          Portugal?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          Denmark?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          Poland?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          France?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          'United Kingdom'?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          Sweden?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          Netherlands?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          Germany?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          Greece?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          'United States'?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          daily_total_net_revenue?: {
            index: number;
            name: string;
            yAxis: number;
            color: string;
            zIndex: number;
            type: string;
          };
          in_game_live?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          desktop?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          sessions_duration_minutes?: {
            zIndex: number;
            index: number;
            type: string;
            name: string;
            yAxis: number;
          };
          'moba-overlay-tft-live-companion'?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          'moba-overlay-d4-builds'?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          'moba-web'?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          arpdau?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          row_arpdau_benchmark?: {
            index: number;
            name: string;
            yAxis: number;
            color: string;
            zIndex: number;
            type: string;
          };
          row_arpdau?: {
            index: number;
            name: string;
            yAxis: number;
            color: string;
            zIndex: number;
            type: string;
          };
          us_arpdau_benchmark?: {
            zIndex: number;
            index: number;
            type: string;
            name: string;
            yAxis: number;
          };
          us_arpdau?: {
            zIndex: number;
            index: number;
            type: string;
            name: string;
            yAxis: number;
          };
          second_series_net_revenue?: {
            zIndex: number;
            index: number;
            type: string;
            name: string;
            yAxis: number;
          };
          first_series_net_revenue?: {
            zIndex: number;
            index: number;
            type: string;
            name: string;
            yAxis: number;
          };
          daily_display_net_revenue?: {
            index: number;
            name: string;
            yAxis: number;
            color: string;
            zIndex: number;
            type: string;
          };
        };
        valuesOptions?: {};
        xAxis?: {
          labels: {
            enabled: boolean;
          };
          type: string;
        };
        dateTimeFormat?: string;
        columnMapping?: {
          sum_impressions?: string;
          sum_opportunities?: string;
          revenue_date?: string;
          daily_video_net_revenue?: string;
          days_back?: string;
          sum_inventory?: string;
          completion_rate?: string;
          window_name?: string;
          country?: string;
          activity_date?: string;
          daily_active_users?: string;
          daily_total_net_revenue?: string;
          rpm?: string;
          owad_date?: string;
          sessions_duration_minutes?: string;
          visibility_rate?: string;
          arpdau?: string;
          row_arpdau_benchmark?: string;
          row_arpdau?: string;
          us_arpdau_benchmark?: string;
          us_arpdau?: string;
          month?: string;
          second_series_net_revenue?: string;
          first_series_net_revenue?: string;
          daily_display_net_revenue?: string;
        };
        textFormat?: string;
        customCode?: string;
        legend?: {
          enabled: boolean;
        };
        reverseX?: boolean;
        reverseY?: boolean;
        countRow?: boolean;
        stringSuffix?: string;
      };
      description: string;
    };
    text: string;
    created_at: string;
    updated_at: string;
    options: {
      parameterMappings: {
        app_name: {
          type: string;
          mapTo: string;
          name: string;
          value: any;
          title: string;
        };
        'Days back'?: {
          type: string;
          mapTo: string;
          name: string;
          value: any;
          title: string;
        };
      };
      isHidden: boolean;
      position: {
        autoHeight: boolean;
        sizeX: number;
        sizeY: number;
        maxSizeY: number;
        maxSizeX: number;
        minSizeY: number;
        minSizeX: number;
        col: number;
        row: number;
      };
    };
    width: number;
    id: number;
  }>;
  dashboard_filters_enabled: boolean;
};

export type DevConsolePartnersDaily = {
  layout: Array<any>;
  name: string;
  created_at: string;
  updated_at: string;
  widgets: Array<{
    visualization?: {
      name: string;
      created_at: string;
      updated_at: string;
      query: {
        description?: string;
        options: {
          parameters: Array<{
            name: string;
            title: string;
            global?: boolean;
            value: string;
            queryId?: number;
            parentQueryId: number;
            type: string;
            locals: Array<any>;
            enumOptions?: string;
          }>;
        };
        id: number;
        name: string;
      };
      type: string;
      options: {
        showDataLabels?: boolean;
        direction?: {
          type: string;
        };
        missingValuesAsZero?: boolean;
        error_y?: {
          visible: boolean;
          type: string;
        };
        numberFormat?: string;
        yAxis?: Array<{
          type: string;
          title?: {
            text: string;
          };
          rangeMax: any;
          rangeMin: any;
          opposite?: boolean;
        }>;
        series?: {
          stacking?: string;
          error_y: {
            visible: boolean;
            type: string;
          };
        };
        globalSeriesType?: string;
        percentFormat?: string;
        sortX?: boolean;
        seriesOptions?: {
          Pending?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          Closed?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          all_installs?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          web_installs?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
            color?: string;
          };
          game_sessions_per_user?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          dau?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          app_uninstalls?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          crashes?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          unique_crashes?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          updates?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          arpdau?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          Canada?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          'United Kingdom'?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          France?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          'United States'?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          Germany?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          Japan?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          China?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          Taiwan?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          'Hong Kong'?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          Russia?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          web_appstore?: {
            zIndex: number;
            index: number;
            type: string;
            color: string;
            yAxis: number;
          };
          promotion?: {
            zIndex: number;
            index: number;
            type: string;
            color: string;
            yAxis: number;
          };
          client_appstore?: {
            zIndex: number;
            index: number;
            type: string;
            color: string;
            yAxis: number;
          };
          others?: {
            zIndex: number;
            index: number;
            type: string;
            color: string;
            yAxis: number;
          };
        };
        valuesOptions?: {};
        xAxis?: {
          labels: {
            enabled: boolean;
          };
          type: string;
        };
        dateTimeFormat?: string;
        columnMapping?: {
          date?: string;
          uninstalls?: string;
          ow_version?: string;
          opened_tickets?: string;
          ticket_status?: string;
          ticket_creation_date?: string;
          all_installs?: string;
          web_installs?: string;
          game_sessions_per_user?: string;
          dau?: string;
          window_visibility?: string;
          window?: string;
          app_uninstalls?: string;
          crashes?: string;
          unique_crashes?: string;
          updates?: string;
          arpdau?: string;
          country_name?: string;
          users?: string;
          window_opens?: string;
          app_name?: string;
          web_appstore?: string;
          client_appstore?: string;
          others?: string;
          promotion?: string;
        };
        textFormat?: string;
        customCode?: string;
        legend?: {
          enabled?: boolean;
          visible?: boolean;
          alignText?: string;
          position?: string;
        };
        timeInterval?: string;
        stageColumn?: string;
        dateColumn?: string;
        valueColumn?: string;
        totalColumn?: string;
        mode?: string;
        tooltipFormat?: string;
        rowNumber?: number;
        stringDecChar?: string;
        defaultColumns?: number;
        stringPrefix?: string;
        stringDecimal?: number;
        counterColName?: string;
        counterLabel?: string;
        defaultRows?: number;
        stringThouSep?: string;
        targetRowNumber?: number;
        reverseY?: boolean;
        itemsPerPage?: number;
        columns?: Array<{
          linkUrlTemplate: string;
          name: string;
          title: string;
          imageUrlTemplate: string;
          linkOpenInNewTab: boolean;
          linkTextTemplate: string;
          allowSearch: boolean;
          allowHTML: boolean;
          imageTitleTemplate: string;
          imageWidth: string;
          visible: boolean;
          alignContent: string;
          imageHeight: string;
          order: number;
          displayAs: string;
          dateTimeFormat?: string;
          linkTitleTemplate: string;
          booleanValues: Array<string>;
          type: string;
          highlightLinks: boolean;
        }>;
        targetColName?: string;
        formatTargetValue?: boolean;
        stringSuffix?: string;
        countRow?: boolean;
        autoHeight?: boolean;
        minColumns?: number;
        minRows?: number;
        valueFormat?: string;
        popup?: {
          enabled: boolean;
          template: string;
        };
        tooltip?: {
          enabled: boolean;
          template: string;
        };
        colors?: {
          max: string;
          borders: string;
          noValue: string;
          background: string;
          min: string;
        };
        steps?: number;
        mapType?: string;
        countryCodeColumn?: string;
        clusteringMode?: string;
        noValuePlaceholder?: string;
        countryCodeType?: string;
        bottomMargin?: number;
      };
      description: string;
    };
    text: string;
    created_at: string;
    updated_at: string;
    options: {
      parameterMappings: {
        app_name?: {
          type: string;
          mapTo: string;
          name: string;
          value: any;
          title: string;
        };
        'Days back'?: {
          type: string;
          mapTo: string;
          name: string;
          value: any;
          title: string;
        };
      };
      isHidden: boolean;
      position: {
        autoHeight: boolean;
        sizeX: number;
        sizeY: number;
        maxSizeY: number;
        maxSizeX: number;
        minSizeY: number;
        minSizeX: number;
        col: number;
        row: number;
      };
    };
    width: number;
    id: number;
  }>;
  dashboard_filters_enabled: boolean;
};

export type PerformanceStatisticsDashboard = {
  layout: Array<any>;
  name: string;
  created_at: string;
  updated_at: string;
  widgets: Array<{
    visualization: {
      name: string;
      created_at: string;
      updated_at: string;
      query: {
        description?: string;
        options: {
          parameters: Array<{
            name: string;
            title: string;
            global: boolean;
            value: string;
            queryId: number;
            parentQueryId?: number;
            type: string;
            locals: Array<any>;
          }>;
        };
        id: number;
        name: string;
      };
      type: string;
      options: {
        timeInterval?: string;
        stageColumn?: string;
        dateColumn?: string;
        valueColumn?: string;
        totalColumn?: string;
        mode?: string;
        tooltipFormat?: string;
        targetColName?: string;
        formatTargetValue?: boolean;
        rowNumber?: number;
        stringDecChar?: string;
        stringDecimal?: number;
        counterColName?: string;
        counterLabel?: string;
        stringThouSep?: string;
        targetRowNumber?: number;
        showDataLabels?: boolean;
        direction?: {
          type: string;
        };
        missingValuesAsZero?: boolean;
        error_y?: {
          visible: boolean;
          type: string;
        };
        numberFormat?: string;
        yAxis?: Array<{
          type: string;
          title?: {
            text: string;
          };
          opposite?: boolean;
        }>;
        series?: {
          stacking?: string;
          error_y: {
            visible: boolean;
            type: string;
          };
          percentValues?: boolean;
        };
        globalSeriesType?: string;
        percentFormat?: string;
        sortX?: boolean;
        seriesOptions?: {
          estimated_median_session?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          sum_mau?: {
            zIndex: number;
            index: number;
            type: string;
            name: string;
            yAxis: number;
          };
          total_dau?: {
            index: number;
            name: string;
            yAxis: number;
            color: string;
            zIndex: number;
            type: string;
          };
          '0.7.17.3'?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          '0.7.17.2'?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          '0.7.17.1'?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          'Other Versions'?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          '0.7.17.0'?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          '0.7.18.0'?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          '0.7.18.1'?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          '0.7.15.0'?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          '0.7.16.0'?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          NULL?: {
            zIndex: number;
            index: number;
            type: string;
            yAxis: number;
          };
          over_one_hour?: {
            zIndex: number;
            index: number;
            type: string;
            name: string;
            yAxis: number;
          };
          under_five_minutes?: {
            zIndex: number;
            index: number;
            type: string;
            name: string;
            yAxis: number;
          };
          sum_sessions?: {
            zIndex: number;
            index: number;
            type: string;
            name: string;
            yAxis: number;
          };
          total_crashes?: {
            index: number;
            name: string;
            yAxis: number;
            color: string;
            zIndex: number;
            type: string;
          };
          distinct_crashes?: {
            index: number;
            name: string;
            yAxis: number;
            color: string;
            zIndex: number;
            type: string;
          };
          total_uninstallations?: {
            index: number;
            name: string;
            yAxis: number;
            color: string;
            zIndex: number;
            type: string;
          };
          unique_uninstallations?: {
            index: number;
            name: string;
            yAxis: number;
            color: string;
            zIndex: number;
            type: string;
          };
          total_installations?: {
            index: number;
            name: string;
            yAxis: number;
            color: string;
            zIndex: number;
            type: string;
          };
          unique_installations?: {
            index: number;
            name: string;
            yAxis: number;
            color: string;
            zIndex: number;
            type: string;
          };
        };
        valuesOptions?: {};
        xAxis?: {
          labels: {
            enabled: boolean;
          };
          type: string;
        };
        dateTimeFormat?: string;
        columnMapping?: {
          estimated_median_session?: string;
          activity_date?: string;
          sum_mau?: string;
          active_month?: string;
          active_date?: string;
          total_dau?: string;
          app_version?: string;
          over_one_hour?: string;
          under_five_minutes?: string;
          sum_sessions?: string;
          crash_date?: string;
          total_crashes?: string;
          distinct_crashes?: string;
          null?: string;
          total_uninstallations?: string;
          unique_uninstallations?: string;
          uninstall_date?: string;
          total_installations?: string;
          install_date?: string;
          unique_installations?: string;
        };
        textFormat?: string;
        customCode?: string;
        legend?: {
          enabled: boolean;
        };
        itemsPerPage?: number;
        columns?: Array<{
          linkUrlTemplate: string;
          name: string;
          title: string;
          imageUrlTemplate: string;
          linkOpenInNewTab: boolean;
          linkTextTemplate: string;
          allowSearch: boolean;
          allowHTML: boolean;
          imageTitleTemplate: string;
          imageWidth: string;
          visible: boolean;
          alignContent: string;
          imageHeight: string;
          order: number;
          displayAs: string;
          linkTitleTemplate: string;
          booleanValues: Array<string>;
          type: string;
          highlightLinks: boolean;
          numberFormat?: string;
        }>;
        bottomMargin?: number;
      };
      description: string;
    };
    text: string;
    created_at: string;
    updated_at: string;
    options: {
      parameterMappings: {
        app_name: {
          type: string;
          mapTo: string;
          name: string;
          value: any;
          title: string;
        };
        'Days back'?: {
          type: string;
          mapTo: string;
          name: string;
          value: any;
          title: string;
        };
      };
      isHidden: boolean;
      position: {
        autoHeight: boolean;
        sizeX: number;
        sizeY: number;
        maxSizeY: number;
        maxSizeX: number;
        minSizeY: number;
        minSizeX: number;
        col: number;
        row: number;
      };
    };
    width: number;
    id: number;
  }>;
  dashboard_filters_enabled: boolean;
};

export type Widget =
  | RevenueStatisticsDashboard['widgets'][number]
  | DevConsolePartnersDaily['widgets'][number]
  | PerformanceStatisticsDashboard['widgets'][number];
