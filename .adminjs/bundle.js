(function (React$1, adminjs, designSystem) {
  'use strict';

  function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

  var React__default = /*#__PURE__*/_interopDefault(React$1);

  const api = new adminjs.ApiClient();
  function Dashboard() {
    const [loading, setLoading] = React$1.useState(true);
    const [error, setError] = React$1.useState('');
    const [data, setData] = React$1.useState({
      usersCount: 0,
      activeUsers7d: 0,
      adminJSVersion: ''
    });
    React$1.useEffect(() => {
      let mounted = true;
      (async () => {
        try {
          const res = await api.getDashboard();
          if (mounted) {
            const payload = res?.data || {};
            setData({
              usersCount: Number(payload.usersCount) || 0,
              activeUsers7d: Number(payload.activeUsers7d) || 0,
              adminJSVersion: payload.adminJSVersion || ''
            });
            setLoading(false);
          }
        } catch (e) {
          if (mounted) {
            setError('Не удалось загрузить данные дашборда');
            setLoading(false);
          }
        }
      })();
      return () => {
        mounted = false;
      };
    }, []);
    return /*#__PURE__*/React.createElement(designSystem.Box, {
      px: "lg",
      py: "lg",
      style: {
        fontFamily: `'Segoe UI', Roboto, Helvetica, Arial, sans-serif`
      }
    }, /*#__PURE__*/React.createElement(Header, null), loading ? /*#__PURE__*/React.createElement(LoaderBlock, null) : error ? /*#__PURE__*/React.createElement(ErrorPlaceholder, {
      text: error
    }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CardsRow, null, /*#__PURE__*/React.createElement(KpiCard, {
      title: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438",
      value: formatNumber(data.usersCount),
      hint: "\u0412\u0441\u0435\u0433\u043E \u0432 \u0441\u0438\u0441\u0442\u0435\u043C\u0435"
    }), /*#__PURE__*/React.createElement(KpiCard, {
      title: "\u0410\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438",
      value: formatNumber(data.activeUsers7d),
      hint: "\u0417\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0438\u0435 7 \u0434\u043D\u0435\u0439"
    }), /*#__PURE__*/React.createElement(KpiCard, {
      title: "\u0412\u0435\u0440\u0441\u0438\u044F AdminJS",
      value: data.adminJSVersion || '—',
      hint: "\u0422\u0435\u043A\u0443\u0449\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F"
    })), /*#__PURE__*/React.createElement(designSystem.Box, {
      mt: "xl",
      display: "grid",
      gridTemplateColumns: "1fr",
      style: {
        gap: 24
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      title: "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C"
    }, /*#__PURE__*/React.createElement(designSystem.Box, {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      p: "lg"
    }, /*#__PURE__*/React.createElement("img", {
      src: "/public/logo.png",
      alt: "AdminJS",
      style: {
        maxWidth: '200px',
        marginBottom: '16px',
        opacity: 0.9
      }
    }), /*#__PURE__*/React.createElement(designSystem.Text, {
      color: "grey60",
      style: {
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 1.5
      }
    }, "\u042D\u0442\u043E \u0432\u0430\u0448\u0430 \u043F\u0430\u043D\u0435\u043B\u044C \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F. \u0417\u0434\u0435\u0441\u044C \u0432\u044B \u043D\u0430\u0439\u0434\u0435\u0442\u0435 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0441\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u043E \u0441\u0438\u0441\u0442\u0435\u043C\u0435 \u0438 \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043B\u0435\u0434\u0438\u0442\u044C \u0437\u0430 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u043C\u0438 \u043C\u0435\u0442\u0440\u0438\u043A\u0430\u043C\u0438."))))));
  }
  function Header() {
    return /*#__PURE__*/React.createElement(designSystem.Box, {
      mb: "xl"
    }, /*#__PURE__*/React.createElement(designSystem.H2, {
      marginBottom: "xs",
      style: {
        fontWeight: 700,
        fontSize: 28,
        letterSpacing: '-0.5px'
      }
    }, "\u041F\u0430\u043D\u0435\u043B\u044C \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F"), /*#__PURE__*/React.createElement(designSystem.Text, {
      variant: "sm",
      color: "grey60",
      style: {
        fontSize: 15,
        lineHeight: 1.4
      }
    }, "\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u0440\u0435\u0437\u044E\u043C\u0435 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u0445 \u043F\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u0435\u0439 \u0438 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u044B"), /*#__PURE__*/React.createElement("hr", {
      style: {
        marginTop: 14,
        border: 0,
        borderTop: '1px solid #eee'
      }
    }));
  }
  function CardsRow({
    children
  }) {
    return /*#__PURE__*/React.createElement(designSystem.Box, {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      style: {
        gap: 24
      }
    }, children);
  }
  function KpiCard({
    title,
    value,
    hint
  }) {
    return /*#__PURE__*/React.createElement(designSystem.Box, {
      variant: "container",
      border: true,
      rounded: true,
      p: "xl",
      style: {
        background: '#fff',
        boxShadow: '0 3px 8px rgba(0,0,0,0.08)',
        transition: 'all 0.3s ease',
        cursor: 'default',
        animation: 'fadeIn 0.6s ease'
      },
      onMouseEnter: e => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 6px 14px rgba(0,0,0,0.12)';
      },
      onMouseLeave: e => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 3px 8px rgba(0,0,0,0.08)';
      }
    }, /*#__PURE__*/React.createElement(designSystem.Label, {
      style: {
        fontSize: 14,
        color: '#555'
      }
    }, title), /*#__PURE__*/React.createElement(designSystem.Text, {
      as: "div",
      mt: "md",
      style: {
        fontSize: 34,
        fontWeight: 700,
        lineHeight: 1.2,
        color: '#111',
        transition: 'opacity 0.5s ease'
      }
    }, value), hint ? /*#__PURE__*/React.createElement(designSystem.Text, {
      variant: "sm",
      mt: "xs",
      color: "grey60",
      style: {
        background: '#f8f9fa',
        borderRadius: 6,
        padding: '2px 6px',
        display: 'inline-block',
        fontSize: 13
      }
    }, hint) : null);
  }
  function Panel({
    title,
    children
  }) {
    return /*#__PURE__*/React.createElement(designSystem.Box, {
      variant: "container",
      border: true,
      rounded: true,
      p: "xl",
      style: {
        background: '#fff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
        transition: 'all 0.3s ease'
      }
    }, /*#__PURE__*/React.createElement(designSystem.H2, {
      marginBottom: "md",
      style: {
        fontSize: 18,
        fontWeight: 600
      }
    }, title), children);
  }
  function LoaderBlock() {
    return /*#__PURE__*/React.createElement(designSystem.Box, {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      style: {
        minHeight: '240px'
      }
    }, /*#__PURE__*/React.createElement(designSystem.Loader, null));
  }
  function ErrorPlaceholder({
    text
  }) {
    return /*#__PURE__*/React.createElement(designSystem.Box, {
      p: "xl",
      style: {
        border: '1px solid #f5c2c7',
        background: '#f8d7da',
        borderRadius: 8
      }
    }, /*#__PURE__*/React.createElement(designSystem.Text, {
      style: {
        color: '#842029',
        fontWeight: 600
      }
    }, text));
  }
  function formatNumber(n) {
    try {
      return new Intl.NumberFormat('ru-RU').format(Number(n) || 0);
    } catch {
      return String(n);
    }
  }

  const Edit = ({ property, record, onChange }) => {
      const { translateProperty } = adminjs.useTranslation();
      const { params } = record;
      const { custom } = property;
      const path = adminjs.flat.get(params, custom.filePathProperty);
      const key = adminjs.flat.get(params, custom.keyProperty);
      const file = adminjs.flat.get(params, custom.fileProperty);
      const [originalKey, setOriginalKey] = React$1.useState(key);
      const [filesToUpload, setFilesToUpload] = React$1.useState([]);
      React$1.useEffect(() => {
          // it means means that someone hit save and new file has been uploaded
          // in this case fliesToUpload should be cleared.
          // This happens when user turns off redirect after new/edit
          if ((typeof key === 'string' && key !== originalKey)
              || (typeof key !== 'string' && !originalKey)
              || (typeof key !== 'string' && Array.isArray(key) && key.length !== originalKey.length)) {
              setOriginalKey(key);
              setFilesToUpload([]);
          }
      }, [key, originalKey]);
      const onUpload = (files) => {
          setFilesToUpload(files);
          onChange(custom.fileProperty, files);
      };
      const handleRemove = () => {
          onChange(custom.fileProperty, null);
      };
      const handleMultiRemove = (singleKey) => {
          const index = (adminjs.flat.get(record.params, custom.keyProperty) || []).indexOf(singleKey);
          const filesToDelete = adminjs.flat.get(record.params, custom.filesToDeleteProperty) || [];
          if (path && path.length > 0) {
              const newPath = path.map((currentPath, i) => (i !== index ? currentPath : null));
              let newParams = adminjs.flat.set(record.params, custom.filesToDeleteProperty, [...filesToDelete, index]);
              newParams = adminjs.flat.set(newParams, custom.filePathProperty, newPath);
              onChange({
                  ...record,
                  params: newParams,
              });
          }
          else {
              // eslint-disable-next-line no-console
              console.log('You cannot remove file when there are no uploaded files yet');
          }
      };
      return (React__default.default.createElement(designSystem.FormGroup, null,
          React__default.default.createElement(designSystem.Label, null, translateProperty(property.label, property.resourceId)),
          React__default.default.createElement(designSystem.DropZone, { onChange: onUpload, multiple: custom.multiple, validate: {
                  mimeTypes: custom.mimeTypes,
                  maxSize: custom.maxSize,
              }, files: filesToUpload }),
          !custom.multiple && key && path && !filesToUpload.length && file !== null && (React__default.default.createElement(designSystem.DropZoneItem, { filename: key, src: path, onRemove: handleRemove })),
          custom.multiple && key && key.length && path ? (React__default.default.createElement(React__default.default.Fragment, null, key.map((singleKey, index) => {
              // when we remove items we set only path index to nulls.
              // key is still there. This is because
              // we have to maintain all the indexes. So here we simply filter out elements which
              // were removed and display only what was left
              const currentPath = path[index];
              return currentPath ? (React__default.default.createElement(designSystem.DropZoneItem, { key: singleKey, filename: singleKey, src: path[index], onRemove: () => handleMultiRemove(singleKey) })) : '';
          }))) : ''));
  };

  const AudioMimeTypes = [
      'audio/aac',
      'audio/midi',
      'audio/x-midi',
      'audio/mpeg',
      'audio/ogg',
      'application/ogg',
      'audio/opus',
      'audio/wav',
      'audio/webm',
      'audio/3gpp2',
  ];
  const ImageMimeTypes = [
      'image/bmp',
      'image/gif',
      'image/jpeg',
      'image/png',
      'image/svg+xml',
      'image/vnd.microsoft.icon',
      'image/tiff',
      'image/webp',
  ];

  // eslint-disable-next-line import/no-extraneous-dependencies
  const SingleFile = (props) => {
      const { name, path, mimeType, width } = props;
      if (path && path.length) {
          if (mimeType && ImageMimeTypes.includes(mimeType)) {
              return (React__default.default.createElement("img", { src: path, style: { maxHeight: width, maxWidth: width }, alt: name }));
          }
          if (mimeType && AudioMimeTypes.includes(mimeType)) {
              return (React__default.default.createElement("audio", { controls: true, src: path },
                  "Your browser does not support the",
                  React__default.default.createElement("code", null, "audio"),
                  React__default.default.createElement("track", { kind: "captions" })));
          }
      }
      return (React__default.default.createElement(designSystem.Box, null,
          React__default.default.createElement(designSystem.Button, { as: "a", href: path, ml: "default", size: "sm", rounded: true, target: "_blank" },
              React__default.default.createElement(designSystem.Icon, { icon: "DocumentDownload", color: "white", mr: "default" }),
              name)));
  };
  const File = ({ width, record, property }) => {
      const { custom } = property;
      let path = adminjs.flat.get(record?.params, custom.filePathProperty);
      if (!path) {
          return null;
      }
      const name = adminjs.flat.get(record?.params, custom.fileNameProperty ? custom.fileNameProperty : custom.keyProperty);
      const mimeType = custom.mimeTypeProperty
          && adminjs.flat.get(record?.params, custom.mimeTypeProperty);
      if (!property.custom.multiple) {
          if (custom.opts && custom.opts.baseUrl) {
              path = `${custom.opts.baseUrl}/${name}`;
          }
          return (React__default.default.createElement(SingleFile, { path: path, name: name, width: width, mimeType: mimeType }));
      }
      if (custom.opts && custom.opts.baseUrl) {
          const baseUrl = custom.opts.baseUrl || '';
          path = path.map((singlePath, index) => `${baseUrl}/${name[index]}`);
      }
      return (React__default.default.createElement(React__default.default.Fragment, null, path.map((singlePath, index) => (React__default.default.createElement(SingleFile, { key: singlePath, path: singlePath, name: name[index], width: width, mimeType: mimeType[index] })))));
  };

  const List = (props) => (React__default.default.createElement(File, { width: 100, ...props }));

  const Show = (props) => {
      const { property } = props;
      const { translateProperty } = adminjs.useTranslation();
      return (React__default.default.createElement(designSystem.FormGroup, null,
          React__default.default.createElement(designSystem.Label, null, translateProperty(property.label, property.resourceId)),
          React__default.default.createElement(File, { width: "100%", ...props })));
  };

  AdminJS.UserComponents = {};
  AdminJS.UserComponents.Dashboard = Dashboard;
  AdminJS.UserComponents.UploadEditComponent = Edit;
  AdminJS.UserComponents.UploadListComponent = List;
  AdminJS.UserComponents.UploadShowComponent = Show;

})(React, AdminJS, AdminJSDesignSystem);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9kYXNoYm9hcmQuanN4IiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL1VwbG9hZEVkaXRDb21wb25lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL3R5cGVzL21pbWUtdHlwZXMudHlwZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9maWxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL1VwbG9hZExpc3RDb21wb25lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvVXBsb2FkU2hvd0NvbXBvbmVudC5qcyIsImVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFwaUNsaWVudCB9IGZyb20gJ2FkbWluanMnO1xyXG5pbXBvcnQgeyBCb3gsIEgyLCBUZXh0LCBMYWJlbCwgTG9hZGVyIH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XHJcblxyXG5jb25zdCBhcGkgPSBuZXcgQXBpQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoKSB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgdXNlcnNDb3VudDogMCxcclxuICAgIGFjdGl2ZVVzZXJzN2Q6IDAsXHJcbiAgICBhZG1pbkpTVmVyc2lvbjogJycsXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgbW91bnRlZCA9IHRydWU7XHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5nZXREYXNoYm9hcmQoKTtcclxuICAgICAgICBpZiAobW91bnRlZCkge1xyXG4gICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHJlcz8uZGF0YSB8fCB7fTtcclxuICAgICAgICAgIHNldERhdGEoe1xyXG4gICAgICAgICAgICB1c2Vyc0NvdW50OiBOdW1iZXIocGF5bG9hZC51c2Vyc0NvdW50KSB8fCAwLFxyXG4gICAgICAgICAgICBhY3RpdmVVc2VyczdkOiBOdW1iZXIocGF5bG9hZC5hY3RpdmVVc2VyczdkKSB8fCAwLFxyXG4gICAgICAgICAgICBhZG1pbkpTVmVyc2lvbjogcGF5bG9hZC5hZG1pbkpTVmVyc2lvbiB8fCAnJyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgaWYgKG1vdW50ZWQpIHtcclxuICAgICAgICAgIHNldEVycm9yKCfQndC1INGD0LTQsNC70L7RgdGMINC30LDQs9GA0YPQt9C40YLRjCDQtNCw0L3QvdGL0LUg0LTQsNGI0LHQvtGA0LTQsCcpO1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KSgpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgbW91bnRlZCA9IGZhbHNlO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHB4PVwibGdcIlxyXG4gICAgICBweT1cImxnXCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBmb250RmFtaWx5OiBgJ1NlZ29lIFVJJywgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmYCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPEhlYWRlciAvPlxyXG5cclxuICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgPExvYWRlckJsb2NrIC8+XHJcbiAgICAgICkgOiBlcnJvciA/IChcclxuICAgICAgICA8RXJyb3JQbGFjZWhvbGRlciB0ZXh0PXtlcnJvcn0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPENhcmRzUm93PlxyXG4gICAgICAgICAgICA8S3BpQ2FyZFxyXG4gICAgICAgICAgICAgIHRpdGxlPVwi0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C4XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWF0TnVtYmVyKGRhdGEudXNlcnNDb3VudCl9XHJcbiAgICAgICAgICAgICAgaGludD1cItCS0YHQtdCz0L4g0LIg0YHQuNGB0YLQtdC80LVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8S3BpQ2FyZFxyXG4gICAgICAgICAgICAgIHRpdGxlPVwi0JDQutGC0LjQstC90YvQtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LhcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtYXROdW1iZXIoZGF0YS5hY3RpdmVVc2VyczdkKX1cclxuICAgICAgICAgICAgICBoaW50PVwi0JfQsCDQv9C+0YHQu9C10LTQvdC40LUgNyDQtNC90LXQuVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxLcGlDYXJkXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCLQktC10YDRgdC40Y8gQWRtaW5KU1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuYWRtaW5KU1ZlcnNpb24gfHwgJ+KAlCd9XHJcbiAgICAgICAgICAgICAgaGludD1cItCi0LXQutGD0YnQsNGPINCy0LXRgNGB0LjRj1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NhcmRzUm93PlxyXG5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgbXQ9XCJ4bFwiXHJcbiAgICAgICAgICAgIGRpc3BsYXk9XCJncmlkXCJcclxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1ucz1cIjFmclwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGdhcDogMjQgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFBhbmVsIHRpdGxlPVwi0JTQvtCx0YDQviDQv9C+0LbQsNC70L7QstCw0YLRjFwiPlxyXG4gICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBwPVwibGdcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL3B1YmxpYy9sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkFkbWluSlNcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMjAwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImdyZXk2MFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS41LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICDQrdGC0L4g0LLQsNGI0LAg0L/QsNC90LXQu9GMINGD0L/RgNCw0LLQu9C10L3QuNGPLiDQl9C00LXRgdGMINCy0Ysg0L3QsNC50LTQtdGC0LUg0L7RgdC90L7QstC90YvQtSDRgdCy0LXQtNC10L3QuNGPXHJcbiAgICAgICAgICAgICAgICAgINC+INGB0LjRgdGC0LXQvNC1INC4INGB0LzQvtC20LXRgtC1INGB0LvQtdC00LjRgtGMINC30LAg0LrQu9GO0YfQtdCy0YvQvNC4INC80LXRgtGA0LjQutCw0LzQuC5cclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9QYW5lbD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IG1iPVwieGxcIj5cclxuICAgICAgPEgyXHJcbiAgICAgICAgbWFyZ2luQm90dG9tPVwieHNcIlxyXG4gICAgICAgIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDcwMCwgZm9udFNpemU6IDI4LCBsZXR0ZXJTcGFjaW5nOiAnLTAuNXB4JyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAg0J/QsNC90LXQu9GMINGD0L/RgNCw0LLQu9C10L3QuNGPXHJcbiAgICAgIDwvSDI+XHJcbiAgICAgIDxUZXh0XHJcbiAgICAgICAgdmFyaWFudD1cInNtXCJcclxuICAgICAgICBjb2xvcj1cImdyZXk2MFwiXHJcbiAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDE1LCBsaW5lSGVpZ2h0OiAxLjQgfX1cclxuICAgICAgPlxyXG4gICAgICAgINCa0YDQsNGC0LrQvtC1INGA0LXQt9GO0LzQtSDQutC70Y7Rh9C10LLRi9GFINC/0L7QutCw0LfQsNGC0LXQu9C10Lkg0Lgg0YHQvtGB0YLQvtGP0L3QuNGPINGB0LjRgdGC0LXQvNGLXHJcbiAgICAgIDwvVGV4dD5cclxuICAgICAgPGhyIHN0eWxlPXt7IG1hcmdpblRvcDogMTQsIGJvcmRlcjogMCwgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNlZWUnIH19IC8+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDYXJkc1Jvdyh7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBkaXNwbGF5PVwiZ3JpZFwiXHJcbiAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM9XCJyZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNjBweCwgMWZyKSlcIlxyXG4gICAgICBzdHlsZT17eyBnYXA6IDI0IH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEtwaUNhcmQoeyB0aXRsZSwgdmFsdWUsIGhpbnQgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHZhcmlhbnQ9XCJjb250YWluZXJcIlxyXG4gICAgICBib3JkZXJcclxuICAgICAgcm91bmRlZFxyXG4gICAgICBwPVwieGxcIlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcclxuICAgICAgICBib3hTaGFkb3c6ICcwIDNweCA4cHggcmdiYSgwLDAsMCwwLjA4KScsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzIGVhc2UnLFxyXG4gICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxyXG4gICAgICAgIGFuaW1hdGlvbjogJ2ZhZGVJbiAwLjZzIGVhc2UnLFxyXG4gICAgICB9fVxyXG4gICAgICBvbk1vdXNlRW50ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKC00cHgpJztcclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm94U2hhZG93ID0gJzAgNnB4IDE0cHggcmdiYSgwLDAsMCwwLjEyKSc7XHJcbiAgICAgIH19XHJcbiAgICAgIG9uTW91c2VMZWF2ZT17KGUpID0+IHtcclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMCknO1xyXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5ib3hTaGFkb3cgPSAnMCAzcHggOHB4IHJnYmEoMCwwLDAsMC4wOCknO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8TGFiZWwgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBjb2xvcjogJyM1NTUnIH19Pnt0aXRsZX08L0xhYmVsPlxyXG4gICAgICA8VGV4dFxyXG4gICAgICAgIGFzPVwiZGl2XCJcclxuICAgICAgICBtdD1cIm1kXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZm9udFNpemU6IDM0LFxyXG4gICAgICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICAgICAgbGluZUhlaWdodDogMS4yLFxyXG4gICAgICAgICAgY29sb3I6ICcjMTExJyxcclxuICAgICAgICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDAuNXMgZWFzZScsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHt2YWx1ZX1cclxuICAgICAgPC9UZXh0PlxyXG4gICAgICB7aGludCA/IChcclxuICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgdmFyaWFudD1cInNtXCJcclxuICAgICAgICAgIG10PVwieHNcIlxyXG4gICAgICAgICAgY29sb3I9XCJncmV5NjBcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJyNmOGY5ZmEnLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDYsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICcycHggNnB4JyxcclxuICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAxMyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2hpbnR9XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBhbmVsKHsgdGl0bGUsIGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICB2YXJpYW50PVwiY29udGFpbmVyXCJcclxuICAgICAgYm9yZGVyXHJcbiAgICAgIHJvdW5kZWRcclxuICAgICAgcD1cInhsXCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXHJcbiAgICAgICAgYm94U2hhZG93OiAnMCAycHggNnB4IHJnYmEoMCwwLDAsMC4wNSknLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlJyxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPEgyIG1hcmdpbkJvdHRvbT1cIm1kXCIgc3R5bGU9e3sgZm9udFNpemU6IDE4LCBmb250V2VpZ2h0OiA2MDAgfX0+XHJcbiAgICAgICAge3RpdGxlfVxyXG4gICAgICA8L0gyPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBMb2FkZXJCbG9jaygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogJzI0MHB4JyB9fVxyXG4gICAgPlxyXG4gICAgICA8TG9hZGVyIC8+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBFcnJvclBsYWNlaG9sZGVyKHsgdGV4dCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgcD1cInhsXCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2Y1YzJjNycsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJyNmOGQ3ZGEnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogOCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPFRleHQgc3R5bGU9e3sgY29sb3I6ICcjODQyMDI5JywgZm9udFdlaWdodDogNjAwIH19Pnt0ZXh0fTwvVGV4dD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdE51bWJlcihuKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ3J1LVJVJykuZm9ybWF0KE51bWJlcihuKSB8fCAwKTtcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBTdHJpbmcobik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IERyb3Bab25lLCBEcm9wWm9uZUl0ZW0sIEZvcm1Hcm91cCwgTGFiZWwgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmltcG9ydCB7IGZsYXQsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnYWRtaW5qcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IEVkaXQgPSAoeyBwcm9wZXJ0eSwgcmVjb3JkLCBvbkNoYW5nZSB9KSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGVQcm9wZXJ0eSB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgICBjb25zdCB7IHBhcmFtcyB9ID0gcmVjb3JkO1xuICAgIGNvbnN0IHsgY3VzdG9tIH0gPSBwcm9wZXJ0eTtcbiAgICBjb25zdCBwYXRoID0gZmxhdC5nZXQocGFyYW1zLCBjdXN0b20uZmlsZVBhdGhQcm9wZXJ0eSk7XG4gICAgY29uc3Qga2V5ID0gZmxhdC5nZXQocGFyYW1zLCBjdXN0b20ua2V5UHJvcGVydHkpO1xuICAgIGNvbnN0IGZpbGUgPSBmbGF0LmdldChwYXJhbXMsIGN1c3RvbS5maWxlUHJvcGVydHkpO1xuICAgIGNvbnN0IFtvcmlnaW5hbEtleSwgc2V0T3JpZ2luYWxLZXldID0gdXNlU3RhdGUoa2V5KTtcbiAgICBjb25zdCBbZmlsZXNUb1VwbG9hZCwgc2V0RmlsZXNUb1VwbG9hZF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gaXQgbWVhbnMgbWVhbnMgdGhhdCBzb21lb25lIGhpdCBzYXZlIGFuZCBuZXcgZmlsZSBoYXMgYmVlbiB1cGxvYWRlZFxuICAgICAgICAvLyBpbiB0aGlzIGNhc2UgZmxpZXNUb1VwbG9hZCBzaG91bGQgYmUgY2xlYXJlZC5cbiAgICAgICAgLy8gVGhpcyBoYXBwZW5zIHdoZW4gdXNlciB0dXJucyBvZmYgcmVkaXJlY3QgYWZ0ZXIgbmV3L2VkaXRcbiAgICAgICAgaWYgKCh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBrZXkgIT09IG9yaWdpbmFsS2V5KVxuICAgICAgICAgICAgfHwgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnICYmICFvcmlnaW5hbEtleSlcbiAgICAgICAgICAgIHx8ICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJyAmJiBBcnJheS5pc0FycmF5KGtleSkgJiYga2V5Lmxlbmd0aCAhPT0gb3JpZ2luYWxLZXkubGVuZ3RoKSkge1xuICAgICAgICAgICAgc2V0T3JpZ2luYWxLZXkoa2V5KTtcbiAgICAgICAgICAgIHNldEZpbGVzVG9VcGxvYWQoW10pO1xuICAgICAgICB9XG4gICAgfSwgW2tleSwgb3JpZ2luYWxLZXldKTtcbiAgICBjb25zdCBvblVwbG9hZCA9IChmaWxlcykgPT4ge1xuICAgICAgICBzZXRGaWxlc1RvVXBsb2FkKGZpbGVzKTtcbiAgICAgICAgb25DaGFuZ2UoY3VzdG9tLmZpbGVQcm9wZXJ0eSwgZmlsZXMpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICBvbkNoYW5nZShjdXN0b20uZmlsZVByb3BlcnR5LCBudWxsKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZU11bHRpUmVtb3ZlID0gKHNpbmdsZUtleSkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IChmbGF0LmdldChyZWNvcmQucGFyYW1zLCBjdXN0b20ua2V5UHJvcGVydHkpIHx8IFtdKS5pbmRleE9mKHNpbmdsZUtleSk7XG4gICAgICAgIGNvbnN0IGZpbGVzVG9EZWxldGUgPSBmbGF0LmdldChyZWNvcmQucGFyYW1zLCBjdXN0b20uZmlsZXNUb0RlbGV0ZVByb3BlcnR5KSB8fCBbXTtcbiAgICAgICAgaWYgKHBhdGggJiYgcGF0aC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQYXRoID0gcGF0aC5tYXAoKGN1cnJlbnRQYXRoLCBpKSA9PiAoaSAhPT0gaW5kZXggPyBjdXJyZW50UGF0aCA6IG51bGwpKTtcbiAgICAgICAgICAgIGxldCBuZXdQYXJhbXMgPSBmbGF0LnNldChyZWNvcmQucGFyYW1zLCBjdXN0b20uZmlsZXNUb0RlbGV0ZVByb3BlcnR5LCBbLi4uZmlsZXNUb0RlbGV0ZSwgaW5kZXhdKTtcbiAgICAgICAgICAgIG5ld1BhcmFtcyA9IGZsYXQuc2V0KG5ld1BhcmFtcywgY3VzdG9tLmZpbGVQYXRoUHJvcGVydHksIG5ld1BhdGgpO1xuICAgICAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIC4uLnJlY29yZCxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IG5ld1BhcmFtcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdZb3UgY2Fubm90IHJlbW92ZSBmaWxlIHdoZW4gdGhlcmUgYXJlIG5vIHVwbG9hZGVkIGZpbGVzIHlldCcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUdyb3VwLCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCBudWxsLCB0cmFuc2xhdGVQcm9wZXJ0eShwcm9wZXJ0eS5sYWJlbCwgcHJvcGVydHkucmVzb3VyY2VJZCkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bab25lLCB7IG9uQ2hhbmdlOiBvblVwbG9hZCwgbXVsdGlwbGU6IGN1c3RvbS5tdWx0aXBsZSwgdmFsaWRhdGU6IHtcbiAgICAgICAgICAgICAgICBtaW1lVHlwZXM6IGN1c3RvbS5taW1lVHlwZXMsXG4gICAgICAgICAgICAgICAgbWF4U2l6ZTogY3VzdG9tLm1heFNpemUsXG4gICAgICAgICAgICB9LCBmaWxlczogZmlsZXNUb1VwbG9hZCB9KSxcbiAgICAgICAgIWN1c3RvbS5tdWx0aXBsZSAmJiBrZXkgJiYgcGF0aCAmJiAhZmlsZXNUb1VwbG9hZC5sZW5ndGggJiYgZmlsZSAhPT0gbnVsbCAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wWm9uZUl0ZW0sIHsgZmlsZW5hbWU6IGtleSwgc3JjOiBwYXRoLCBvblJlbW92ZTogaGFuZGxlUmVtb3ZlIH0pKSxcbiAgICAgICAgY3VzdG9tLm11bHRpcGxlICYmIGtleSAmJiBrZXkubGVuZ3RoICYmIHBhdGggPyAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwga2V5Lm1hcCgoc2luZ2xlS2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgLy8gd2hlbiB3ZSByZW1vdmUgaXRlbXMgd2Ugc2V0IG9ubHkgcGF0aCBpbmRleCB0byBudWxscy5cbiAgICAgICAgICAgIC8vIGtleSBpcyBzdGlsbCB0aGVyZS4gVGhpcyBpcyBiZWNhdXNlXG4gICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIG1haW50YWluIGFsbCB0aGUgaW5kZXhlcy4gU28gaGVyZSB3ZSBzaW1wbHkgZmlsdGVyIG91dCBlbGVtZW50cyB3aGljaFxuICAgICAgICAgICAgLy8gd2VyZSByZW1vdmVkIGFuZCBkaXNwbGF5IG9ubHkgd2hhdCB3YXMgbGVmdFxuICAgICAgICAgICAgY29uc3QgY3VycmVudFBhdGggPSBwYXRoW2luZGV4XTtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50UGF0aCA/IChSZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bab25lSXRlbSwgeyBrZXk6IHNpbmdsZUtleSwgZmlsZW5hbWU6IHNpbmdsZUtleSwgc3JjOiBwYXRoW2luZGV4XSwgb25SZW1vdmU6ICgpID0+IGhhbmRsZU11bHRpUmVtb3ZlKHNpbmdsZUtleSkgfSkpIDogJyc7XG4gICAgICAgIH0pKSkgOiAnJykpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEVkaXQ7XG4iLCJleHBvcnQgY29uc3QgQXVkaW9NaW1lVHlwZXMgPSBbXG4gICAgJ2F1ZGlvL2FhYycsXG4gICAgJ2F1ZGlvL21pZGknLFxuICAgICdhdWRpby94LW1pZGknLFxuICAgICdhdWRpby9tcGVnJyxcbiAgICAnYXVkaW8vb2dnJyxcbiAgICAnYXBwbGljYXRpb24vb2dnJyxcbiAgICAnYXVkaW8vb3B1cycsXG4gICAgJ2F1ZGlvL3dhdicsXG4gICAgJ2F1ZGlvL3dlYm0nLFxuICAgICdhdWRpby8zZ3BwMicsXG5dO1xuZXhwb3J0IGNvbnN0IFZpZGVvTWltZVR5cGVzID0gW1xuICAgICd2aWRlby94LW1zdmlkZW8nLFxuICAgICd2aWRlby9tcGVnJyxcbiAgICAndmlkZW8vb2dnJyxcbiAgICAndmlkZW8vbXAydCcsXG4gICAgJ3ZpZGVvL3dlYm0nLFxuICAgICd2aWRlby8zZ3BwJyxcbiAgICAndmlkZW8vM2dwcDInLFxuXTtcbmV4cG9ydCBjb25zdCBJbWFnZU1pbWVUeXBlcyA9IFtcbiAgICAnaW1hZ2UvYm1wJyxcbiAgICAnaW1hZ2UvZ2lmJyxcbiAgICAnaW1hZ2UvanBlZycsXG4gICAgJ2ltYWdlL3BuZycsXG4gICAgJ2ltYWdlL3N2Zyt4bWwnLFxuICAgICdpbWFnZS92bmQubWljcm9zb2Z0Lmljb24nLFxuICAgICdpbWFnZS90aWZmJyxcbiAgICAnaW1hZ2Uvd2VicCcsXG5dO1xuZXhwb3J0IGNvbnN0IENvbXByZXNzZWRNaW1lVHlwZXMgPSBbXG4gICAgJ2FwcGxpY2F0aW9uL3gtYnppcCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtYnppcDInLFxuICAgICdhcHBsaWNhdGlvbi9nemlwJyxcbiAgICAnYXBwbGljYXRpb24vamF2YS1hcmNoaXZlJyxcbiAgICAnYXBwbGljYXRpb24veC10YXInLFxuICAgICdhcHBsaWNhdGlvbi96aXAnLFxuICAgICdhcHBsaWNhdGlvbi94LTd6LWNvbXByZXNzZWQnLFxuXTtcbmV4cG9ydCBjb25zdCBEb2N1bWVudE1pbWVUeXBlcyA9IFtcbiAgICAnYXBwbGljYXRpb24veC1hYml3b3JkJyxcbiAgICAnYXBwbGljYXRpb24veC1mcmVlYXJjJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLmFtYXpvbi5lYm9vaycsXG4gICAgJ2FwcGxpY2F0aW9uL21zd29yZCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmRvY3VtZW50JyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLWZvbnRvYmplY3QnLFxuICAgICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnByZXNlbnRhdGlvbicsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuc3ByZWFkc2hlZXQnLFxuICAgICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnRleHQnLFxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5wcmVzZW50YXRpb25tbC5wcmVzZW50YXRpb24nLFxuICAgICdhcHBsaWNhdGlvbi92bmQucmFyJyxcbiAgICAnYXBwbGljYXRpb24vcnRmJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnLFxuXTtcbmV4cG9ydCBjb25zdCBUZXh0TWltZVR5cGVzID0gW1xuICAgICd0ZXh0L2NzcycsXG4gICAgJ3RleHQvY3N2JyxcbiAgICAndGV4dC9odG1sJyxcbiAgICAndGV4dC9jYWxlbmRhcicsXG4gICAgJ3RleHQvamF2YXNjcmlwdCcsXG4gICAgJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICdhcHBsaWNhdGlvbi9sZCtqc29uJyxcbiAgICAndGV4dC9qYXZhc2NyaXB0JyxcbiAgICAndGV4dC9wbGFpbicsXG4gICAgJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcsXG4gICAgJ2FwcGxpY2F0aW9uL3htbCcsXG4gICAgJ3RleHQveG1sJyxcbl07XG5leHBvcnQgY29uc3QgQmluYXJ5RG9jc01pbWVUeXBlcyA9IFtcbiAgICAnYXBwbGljYXRpb24vZXB1Yit6aXAnLFxuICAgICdhcHBsaWNhdGlvbi9wZGYnLFxuXTtcbmV4cG9ydCBjb25zdCBGb250TWltZVR5cGVzID0gW1xuICAgICdmb250L290ZicsXG4gICAgJ2ZvbnQvdHRmJyxcbiAgICAnZm9udC93b2ZmJyxcbiAgICAnZm9udC93b2ZmMicsXG5dO1xuZXhwb3J0IGNvbnN0IE90aGVyTWltZVR5cGVzID0gW1xuICAgICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nLFxuICAgICdhcHBsaWNhdGlvbi94LWNzaCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5hcHBsZS5pbnN0YWxsZXIreG1sJyxcbiAgICAnYXBwbGljYXRpb24veC1odHRwZC1waHAnLFxuICAgICdhcHBsaWNhdGlvbi94LXNoJyxcbiAgICAnYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2gnLFxuICAgICd2bmQudmlzaW8nLFxuICAgICdhcHBsaWNhdGlvbi92bmQubW96aWxsYS54dWwreG1sJyxcbl07XG5leHBvcnQgY29uc3QgTWltZVR5cGVzID0gW1xuICAgIC4uLkF1ZGlvTWltZVR5cGVzLFxuICAgIC4uLlZpZGVvTWltZVR5cGVzLFxuICAgIC4uLkltYWdlTWltZVR5cGVzLFxuICAgIC4uLkNvbXByZXNzZWRNaW1lVHlwZXMsXG4gICAgLi4uRG9jdW1lbnRNaW1lVHlwZXMsXG4gICAgLi4uVGV4dE1pbWVUeXBlcyxcbiAgICAuLi5CaW5hcnlEb2NzTWltZVR5cGVzLFxuICAgIC4uLk90aGVyTWltZVR5cGVzLFxuICAgIC4uLkZvbnRNaW1lVHlwZXMsXG4gICAgLi4uT3RoZXJNaW1lVHlwZXMsXG5dO1xuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIEljb24gfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmltcG9ydCB7IGZsYXQgfSBmcm9tICdhZG1pbmpzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBdWRpb01pbWVUeXBlcywgSW1hZ2VNaW1lVHlwZXMgfSBmcm9tICcuLi90eXBlcy9taW1lLXR5cGVzLnR5cGUuanMnO1xuY29uc3QgU2luZ2xlRmlsZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgcGF0aCwgbWltZVR5cGUsIHdpZHRoIH0gPSBwcm9wcztcbiAgICBpZiAocGF0aCAmJiBwYXRoLmxlbmd0aCkge1xuICAgICAgICBpZiAobWltZVR5cGUgJiYgSW1hZ2VNaW1lVHlwZXMuaW5jbHVkZXMobWltZVR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IHBhdGgsIHN0eWxlOiB7IG1heEhlaWdodDogd2lkdGgsIG1heFdpZHRoOiB3aWR0aCB9LCBhbHQ6IG5hbWUgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtaW1lVHlwZSAmJiBBdWRpb01pbWVUeXBlcy5pbmNsdWRlcyhtaW1lVHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIsIHsgY29udHJvbHM6IHRydWUsIHNyYzogcGF0aCB9LFxuICAgICAgICAgICAgICAgIFwiWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlXCIsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImNvZGVcIiwgbnVsbCwgXCJhdWRpb1wiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJhY2tcIiwgeyBraW5kOiBcImNhcHRpb25zXCIgfSkpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBhczogXCJhXCIsIGhyZWY6IHBhdGgsIG1sOiBcImRlZmF1bHRcIiwgc2l6ZTogXCJzbVwiLCByb3VuZGVkOiB0cnVlLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyBpY29uOiBcIkRvY3VtZW50RG93bmxvYWRcIiwgY29sb3I6IFwid2hpdGVcIiwgbXI6IFwiZGVmYXVsdFwiIH0pLFxuICAgICAgICAgICAgbmFtZSkpKTtcbn07XG5jb25zdCBGaWxlID0gKHsgd2lkdGgsIHJlY29yZCwgcHJvcGVydHkgfSkgPT4ge1xuICAgIGNvbnN0IHsgY3VzdG9tIH0gPSBwcm9wZXJ0eTtcbiAgICBsZXQgcGF0aCA9IGZsYXQuZ2V0KHJlY29yZD8ucGFyYW1zLCBjdXN0b20uZmlsZVBhdGhQcm9wZXJ0eSk7XG4gICAgaWYgKCFwYXRoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBuYW1lID0gZmxhdC5nZXQocmVjb3JkPy5wYXJhbXMsIGN1c3RvbS5maWxlTmFtZVByb3BlcnR5ID8gY3VzdG9tLmZpbGVOYW1lUHJvcGVydHkgOiBjdXN0b20ua2V5UHJvcGVydHkpO1xuICAgIGNvbnN0IG1pbWVUeXBlID0gY3VzdG9tLm1pbWVUeXBlUHJvcGVydHlcbiAgICAgICAgJiYgZmxhdC5nZXQocmVjb3JkPy5wYXJhbXMsIGN1c3RvbS5taW1lVHlwZVByb3BlcnR5KTtcbiAgICBpZiAoIXByb3BlcnR5LmN1c3RvbS5tdWx0aXBsZSkge1xuICAgICAgICBpZiAoY3VzdG9tLm9wdHMgJiYgY3VzdG9tLm9wdHMuYmFzZVVybCkge1xuICAgICAgICAgICAgcGF0aCA9IGAke2N1c3RvbS5vcHRzLmJhc2VVcmx9LyR7bmFtZX1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChTaW5nbGVGaWxlLCB7IHBhdGg6IHBhdGgsIG5hbWU6IG5hbWUsIHdpZHRoOiB3aWR0aCwgbWltZVR5cGU6IG1pbWVUeXBlIH0pKTtcbiAgICB9XG4gICAgaWYgKGN1c3RvbS5vcHRzICYmIGN1c3RvbS5vcHRzLmJhc2VVcmwpIHtcbiAgICAgICAgY29uc3QgYmFzZVVybCA9IGN1c3RvbS5vcHRzLmJhc2VVcmwgfHwgJyc7XG4gICAgICAgIHBhdGggPSBwYXRoLm1hcCgoc2luZ2xlUGF0aCwgaW5kZXgpID0+IGAke2Jhc2VVcmx9LyR7bmFtZVtpbmRleF19YCk7XG4gICAgfVxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgcGF0aC5tYXAoKHNpbmdsZVBhdGgsIGluZGV4KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChTaW5nbGVGaWxlLCB7IGtleTogc2luZ2xlUGF0aCwgcGF0aDogc2luZ2xlUGF0aCwgbmFtZTogbmFtZVtpbmRleF0sIHdpZHRoOiB3aWR0aCwgbWltZVR5cGU6IG1pbWVUeXBlW2luZGV4XSB9KSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRmlsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmlsZSBmcm9tICcuL2ZpbGUuanMnO1xuY29uc3QgTGlzdCA9IChwcm9wcykgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmlsZSwgeyB3aWR0aDogMTAwLCAuLi5wcm9wcyB9KSk7XG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuIiwiaW1wb3J0IHsgRm9ybUdyb3VwLCBMYWJlbCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdhZG1pbmpzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmlsZSBmcm9tICcuL2ZpbGUuanMnO1xuY29uc3QgU2hvdyA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgcHJvcGVydHkgfSA9IHByb3BzO1xuICAgIGNvbnN0IHsgdHJhbnNsYXRlUHJvcGVydHkgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1Hcm91cCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwgbnVsbCwgdHJhbnNsYXRlUHJvcGVydHkocHJvcGVydHkubGFiZWwsIHByb3BlcnR5LnJlc291cmNlSWQpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGaWxlLCB7IHdpZHRoOiBcIjEwMCVcIiwgLi4ucHJvcHMgfSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTaG93O1xuIiwiQWRtaW5KUy5Vc2VyQ29tcG9uZW50cyA9IHt9XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Rhc2hib2FyZCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuRGFzaGJvYXJkID0gRGFzaGJvYXJkXG5pbXBvcnQgVXBsb2FkRWRpdENvbXBvbmVudCBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvVXBsb2FkRWRpdENvbXBvbmVudCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuVXBsb2FkRWRpdENvbXBvbmVudCA9IFVwbG9hZEVkaXRDb21wb25lbnRcbmltcG9ydCBVcGxvYWRMaXN0Q29tcG9uZW50IGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9VcGxvYWRMaXN0Q29tcG9uZW50J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5VcGxvYWRMaXN0Q29tcG9uZW50ID0gVXBsb2FkTGlzdENvbXBvbmVudFxuaW1wb3J0IFVwbG9hZFNob3dDb21wb25lbnQgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL1VwbG9hZFNob3dDb21wb25lbnQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlVwbG9hZFNob3dDb21wb25lbnQgPSBVcGxvYWRTaG93Q29tcG9uZW50Il0sIm5hbWVzIjpbImFwaSIsIkFwaUNsaWVudCIsIkRhc2hib2FyZCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwiZGF0YSIsInNldERhdGEiLCJ1c2Vyc0NvdW50IiwiYWN0aXZlVXNlcnM3ZCIsImFkbWluSlNWZXJzaW9uIiwidXNlRWZmZWN0IiwibW91bnRlZCIsInJlcyIsImdldERhc2hib2FyZCIsInBheWxvYWQiLCJOdW1iZXIiLCJlIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiQm94IiwicHgiLCJweSIsInN0eWxlIiwiZm9udEZhbWlseSIsIkhlYWRlciIsIkxvYWRlckJsb2NrIiwiRXJyb3JQbGFjZWhvbGRlciIsInRleHQiLCJGcmFnbWVudCIsIkNhcmRzUm93IiwiS3BpQ2FyZCIsInRpdGxlIiwidmFsdWUiLCJmb3JtYXROdW1iZXIiLCJoaW50IiwibXQiLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdhcCIsIlBhbmVsIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInAiLCJzcmMiLCJhbHQiLCJtYXhXaWR0aCIsIm1hcmdpbkJvdHRvbSIsIm9wYWNpdHkiLCJUZXh0IiwiY29sb3IiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImxpbmVIZWlnaHQiLCJtYiIsIkgyIiwiZm9udFdlaWdodCIsImxldHRlclNwYWNpbmciLCJ2YXJpYW50IiwibWFyZ2luVG9wIiwiYm9yZGVyIiwiYm9yZGVyVG9wIiwiY2hpbGRyZW4iLCJyb3VuZGVkIiwiYmFja2dyb3VuZCIsImJveFNoYWRvdyIsInRyYW5zaXRpb24iLCJjdXJzb3IiLCJhbmltYXRpb24iLCJvbk1vdXNlRW50ZXIiLCJjdXJyZW50VGFyZ2V0IiwidHJhbnNmb3JtIiwib25Nb3VzZUxlYXZlIiwiTGFiZWwiLCJhcyIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtaW5IZWlnaHQiLCJMb2FkZXIiLCJuIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdCIsIlN0cmluZyIsInVzZVRyYW5zbGF0aW9uIiwiZmxhdCIsIkZvcm1Hcm91cCIsIkRyb3Bab25lIiwiRHJvcFpvbmVJdGVtIiwiQnV0dG9uIiwiSWNvbiIsIkFkbWluSlMiLCJVc2VyQ29tcG9uZW50cyIsIlVw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
