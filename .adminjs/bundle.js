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

  const Photo = ({
    record,
    property
  }) => {
    // сначала пробуем photoUrl (виртуальное поле), иначе — ключ photo
    const urlFromPhotoUrl = record?.params?.photoUrl;
    const key = record?.params?.photo;
    const src = urlFromPhotoUrl || (key ? `${AdminJS.env.ADMIN_API_BASE_URL || 'http://localhost:3002'}/public/${key}` : null);
    if (!src) return /*#__PURE__*/React.createElement("span", null, "-");
    return (
      /*#__PURE__*/
      // небольшая миниатюра
      React.createElement("img", {
        src: src,
        alt: "preview",
        style: {
          maxWidth: 120,
          maxHeight: 80,
          objectFit: 'cover',
          borderRadius: 6
        }
      })
    );
  };

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
  AdminJS.UserComponents.Photo = Photo;
  AdminJS.UserComponents.UploadEditComponent = Edit;
  AdminJS.UserComponents.UploadListComponent = List;
  AdminJS.UserComponents.UploadShowComponent = Show;

})(React, AdminJS, AdminJSDesignSystem);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9zcmMvYWRtaW4vY29tcG9uZW50cy9kYXNoYm9hcmQuanN4IiwiLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvcGhvdG8uanN4IiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL1VwbG9hZEVkaXRDb21wb25lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL3R5cGVzL21pbWUtdHlwZXMudHlwZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9maWxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL1VwbG9hZExpc3RDb21wb25lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvVXBsb2FkU2hvd0NvbXBvbmVudC5qcyIsImVudHJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFwaUNsaWVudCB9IGZyb20gJ2FkbWluanMnO1xyXG5pbXBvcnQgeyBCb3gsIEgyLCBUZXh0LCBMYWJlbCwgTG9hZGVyIH0gZnJvbSAnQGFkbWluanMvZGVzaWduLXN5c3RlbSc7XHJcblxyXG5jb25zdCBhcGkgPSBuZXcgQXBpQ2xpZW50KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXNoYm9hcmQoKSB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgdXNlcnNDb3VudDogMCxcclxuICAgIGFjdGl2ZVVzZXJzN2Q6IDAsXHJcbiAgICBhZG1pbkpTVmVyc2lvbjogJycsXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgbW91bnRlZCA9IHRydWU7XHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5nZXREYXNoYm9hcmQoKTtcclxuICAgICAgICBpZiAobW91bnRlZCkge1xyXG4gICAgICAgICAgY29uc3QgcGF5bG9hZCA9IHJlcz8uZGF0YSB8fCB7fTtcclxuICAgICAgICAgIHNldERhdGEoe1xyXG4gICAgICAgICAgICB1c2Vyc0NvdW50OiBOdW1iZXIocGF5bG9hZC51c2Vyc0NvdW50KSB8fCAwLFxyXG4gICAgICAgICAgICBhY3RpdmVVc2VyczdkOiBOdW1iZXIocGF5bG9hZC5hY3RpdmVVc2VyczdkKSB8fCAwLFxyXG4gICAgICAgICAgICBhZG1pbkpTVmVyc2lvbjogcGF5bG9hZC5hZG1pbkpTVmVyc2lvbiB8fCAnJyxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgaWYgKG1vdW50ZWQpIHtcclxuICAgICAgICAgIHNldEVycm9yKCfQndC1INGD0LTQsNC70L7RgdGMINC30LDQs9GA0YPQt9C40YLRjCDQtNCw0L3QvdGL0LUg0LTQsNGI0LHQvtGA0LTQsCcpO1xyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KSgpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgbW91bnRlZCA9IGZhbHNlO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHB4PVwibGdcIlxyXG4gICAgICBweT1cImxnXCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBmb250RmFtaWx5OiBgJ1NlZ29lIFVJJywgUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmYCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPEhlYWRlciAvPlxyXG5cclxuICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgPExvYWRlckJsb2NrIC8+XHJcbiAgICAgICkgOiBlcnJvciA/IChcclxuICAgICAgICA8RXJyb3JQbGFjZWhvbGRlciB0ZXh0PXtlcnJvcn0gLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPENhcmRzUm93PlxyXG4gICAgICAgICAgICA8S3BpQ2FyZFxyXG4gICAgICAgICAgICAgIHRpdGxlPVwi0J/QvtC70YzQt9C+0LLQsNGC0LXQu9C4XCJcclxuICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWF0TnVtYmVyKGRhdGEudXNlcnNDb3VudCl9XHJcbiAgICAgICAgICAgICAgaGludD1cItCS0YHQtdCz0L4g0LIg0YHQuNGB0YLQtdC80LVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8S3BpQ2FyZFxyXG4gICAgICAgICAgICAgIHRpdGxlPVwi0JDQutGC0LjQstC90YvQtSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LhcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmb3JtYXROdW1iZXIoZGF0YS5hY3RpdmVVc2VyczdkKX1cclxuICAgICAgICAgICAgICBoaW50PVwi0JfQsCDQv9C+0YHQu9C10LTQvdC40LUgNyDQtNC90LXQuVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxLcGlDYXJkXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCLQktC10YDRgdC40Y8gQWRtaW5KU1wiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e2RhdGEuYWRtaW5KU1ZlcnNpb24gfHwgJ+KAlCd9XHJcbiAgICAgICAgICAgICAgaGludD1cItCi0LXQutGD0YnQsNGPINCy0LXRgNGB0LjRj1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NhcmRzUm93PlxyXG5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgbXQ9XCJ4bFwiXHJcbiAgICAgICAgICAgIGRpc3BsYXk9XCJncmlkXCJcclxuICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQ29sdW1ucz1cIjFmclwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGdhcDogMjQgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFBhbmVsIHRpdGxlPVwi0JTQvtCx0YDQviDQv9C+0LbQsNC70L7QstCw0YLRjFwiPlxyXG4gICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICBwPVwibGdcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiL3B1YmxpYy9sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIkFkbWluSlNcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMjAwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOSxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cImdyZXk2MFwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogMS41LFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICDQrdGC0L4g0LLQsNGI0LAg0L/QsNC90LXQu9GMINGD0L/RgNCw0LLQu9C10L3QuNGPLiDQl9C00LXRgdGMINCy0Ysg0L3QsNC50LTQtdGC0LUg0L7RgdC90L7QstC90YvQtSDRgdCy0LXQtNC10L3QuNGPXHJcbiAgICAgICAgICAgICAgICAgINC+INGB0LjRgdGC0LXQvNC1INC4INGB0LzQvtC20LXRgtC1INGB0LvQtdC00LjRgtGMINC30LAg0LrQu9GO0YfQtdCy0YvQvNC4INC80LXRgtGA0LjQutCw0LzQuC5cclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9QYW5lbD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IG1iPVwieGxcIj5cclxuICAgICAgPEgyXHJcbiAgICAgICAgbWFyZ2luQm90dG9tPVwieHNcIlxyXG4gICAgICAgIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDcwMCwgZm9udFNpemU6IDI4LCBsZXR0ZXJTcGFjaW5nOiAnLTAuNXB4JyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAg0J/QsNC90LXQu9GMINGD0L/RgNCw0LLQu9C10L3QuNGPXHJcbiAgICAgIDwvSDI+XHJcbiAgICAgIDxUZXh0XHJcbiAgICAgICAgdmFyaWFudD1cInNtXCJcclxuICAgICAgICBjb2xvcj1cImdyZXk2MFwiXHJcbiAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDE1LCBsaW5lSGVpZ2h0OiAxLjQgfX1cclxuICAgICAgPlxyXG4gICAgICAgINCa0YDQsNGC0LrQvtC1INGA0LXQt9GO0LzQtSDQutC70Y7Rh9C10LLRi9GFINC/0L7QutCw0LfQsNGC0LXQu9C10Lkg0Lgg0YHQvtGB0YLQvtGP0L3QuNGPINGB0LjRgdGC0LXQvNGLXHJcbiAgICAgIDwvVGV4dD5cclxuICAgICAgPGhyIHN0eWxlPXt7IG1hcmdpblRvcDogMTQsIGJvcmRlcjogMCwgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNlZWUnIH19IC8+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDYXJkc1Jvdyh7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBkaXNwbGF5PVwiZ3JpZFwiXHJcbiAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM9XCJyZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNjBweCwgMWZyKSlcIlxyXG4gICAgICBzdHlsZT17eyBnYXA6IDI0IH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEtwaUNhcmQoeyB0aXRsZSwgdmFsdWUsIGhpbnQgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHZhcmlhbnQ9XCJjb250YWluZXJcIlxyXG4gICAgICBib3JkZXJcclxuICAgICAgcm91bmRlZFxyXG4gICAgICBwPVwieGxcIlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjZmZmJyxcclxuICAgICAgICBib3hTaGFkb3c6ICcwIDNweCA4cHggcmdiYSgwLDAsMCwwLjA4KScsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzIGVhc2UnLFxyXG4gICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnLFxyXG4gICAgICAgIGFuaW1hdGlvbjogJ2ZhZGVJbiAwLjZzIGVhc2UnLFxyXG4gICAgICB9fVxyXG4gICAgICBvbk1vdXNlRW50ZXI9eyhlKSA9PiB7XHJcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKC00cHgpJztcclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUuYm94U2hhZG93ID0gJzAgNnB4IDE0cHggcmdiYSgwLDAsMCwwLjEyKSc7XHJcbiAgICAgIH19XHJcbiAgICAgIG9uTW91c2VMZWF2ZT17KGUpID0+IHtcclxuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoMCknO1xyXG4gICAgICAgIGUuY3VycmVudFRhcmdldC5zdHlsZS5ib3hTaGFkb3cgPSAnMCAzcHggOHB4IHJnYmEoMCwwLDAsMC4wOCknO1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8TGFiZWwgc3R5bGU9e3sgZm9udFNpemU6IDE0LCBjb2xvcjogJyM1NTUnIH19Pnt0aXRsZX08L0xhYmVsPlxyXG4gICAgICA8VGV4dFxyXG4gICAgICAgIGFzPVwiZGl2XCJcclxuICAgICAgICBtdD1cIm1kXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZm9udFNpemU6IDM0LFxyXG4gICAgICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICAgICAgbGluZUhlaWdodDogMS4yLFxyXG4gICAgICAgICAgY29sb3I6ICcjMTExJyxcclxuICAgICAgICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDAuNXMgZWFzZScsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHt2YWx1ZX1cclxuICAgICAgPC9UZXh0PlxyXG4gICAgICB7aGludCA/IChcclxuICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgdmFyaWFudD1cInNtXCJcclxuICAgICAgICAgIG10PVwieHNcIlxyXG4gICAgICAgICAgY29sb3I9XCJncmV5NjBcIlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJyNmOGY5ZmEnLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDYsXHJcbiAgICAgICAgICAgIHBhZGRpbmc6ICcycHggNnB4JyxcclxuICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAxMyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2hpbnR9XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBhbmVsKHsgdGl0bGUsIGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICB2YXJpYW50PVwiY29udGFpbmVyXCJcclxuICAgICAgYm9yZGVyXHJcbiAgICAgIHJvdW5kZWRcclxuICAgICAgcD1cInhsXCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnI2ZmZicsXHJcbiAgICAgICAgYm94U2hhZG93OiAnMCAycHggNnB4IHJnYmEoMCwwLDAsMC4wNSknLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlJyxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPEgyIG1hcmdpbkJvdHRvbT1cIm1kXCIgc3R5bGU9e3sgZm9udFNpemU6IDE4LCBmb250V2VpZ2h0OiA2MDAgfX0+XHJcbiAgICAgICAge3RpdGxlfVxyXG4gICAgICA8L0gyPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBMb2FkZXJCbG9jaygpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxyXG4gICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXHJcbiAgICAgIHN0eWxlPXt7IG1pbkhlaWdodDogJzI0MHB4JyB9fVxyXG4gICAgPlxyXG4gICAgICA8TG9hZGVyIC8+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBFcnJvclBsYWNlaG9sZGVyKHsgdGV4dCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgcD1cInhsXCJcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2Y1YzJjNycsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJyNmOGQ3ZGEnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogOCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPFRleHQgc3R5bGU9e3sgY29sb3I6ICcjODQyMDI5JywgZm9udFdlaWdodDogNjAwIH19Pnt0ZXh0fTwvVGV4dD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdE51bWJlcihuKSB7XHJcbiAgdHJ5IHtcclxuICAgIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ3J1LVJVJykuZm9ybWF0KE51bWJlcihuKSB8fCAwKTtcclxuICB9IGNhdGNoIHtcclxuICAgIHJldHVybiBTdHJpbmcobik7XHJcbiAgfVxyXG59XHJcbiIsImNvbnN0IFBob3RvID0gKHsgcmVjb3JkLCBwcm9wZXJ0eSB9KSA9PiB7XHJcbiAgLy8g0YHQvdCw0YfQsNC70LAg0L/RgNC+0LHRg9C10LwgcGhvdG9VcmwgKNCy0LjRgNGC0YPQsNC70YzQvdC+0LUg0L/QvtC70LUpLCDQuNC90LDRh9C1IOKAlCDQutC70Y7RhyBwaG90b1xyXG4gIGNvbnN0IHVybEZyb21QaG90b1VybCA9IHJlY29yZD8ucGFyYW1zPy5waG90b1VybDtcclxuICBjb25zdCBrZXkgPSByZWNvcmQ/LnBhcmFtcz8ucGhvdG87XHJcbiAgY29uc3Qgc3JjID1cclxuICAgIHVybEZyb21QaG90b1VybCB8fFxyXG4gICAgKGtleVxyXG4gICAgICA/IGAke3Byb2Nlc3MuZW52LkFETUlOX0FQSV9CQVNFX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDozMDAyJ30vcHVibGljLyR7a2V5fWBcclxuICAgICAgOiBudWxsKTtcclxuXHJcbiAgaWYgKCFzcmMpIHJldHVybiA8c3Bhbj4tPC9zcGFuPjtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vINC90LXQsdC+0LvRjNGI0LDRjyDQvNC40L3QuNCw0YLRjtGA0LBcclxuICAgIDxpbWdcclxuICAgICAgc3JjPXtzcmN9XHJcbiAgICAgIGFsdD1cInByZXZpZXdcIlxyXG4gICAgICBzdHlsZT17e1xyXG4gICAgICAgIG1heFdpZHRoOiAxMjAsXHJcbiAgICAgICAgbWF4SGVpZ2h0OiA4MCxcclxuICAgICAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA2LFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGhvdG87XHJcbiIsImltcG9ydCB7IERyb3Bab25lLCBEcm9wWm9uZUl0ZW0sIEZvcm1Hcm91cCwgTGFiZWwgfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmltcG9ydCB7IGZsYXQsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnYWRtaW5qcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmNvbnN0IEVkaXQgPSAoeyBwcm9wZXJ0eSwgcmVjb3JkLCBvbkNoYW5nZSB9KSA9PiB7XG4gICAgY29uc3QgeyB0cmFuc2xhdGVQcm9wZXJ0eSB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgICBjb25zdCB7IHBhcmFtcyB9ID0gcmVjb3JkO1xuICAgIGNvbnN0IHsgY3VzdG9tIH0gPSBwcm9wZXJ0eTtcbiAgICBjb25zdCBwYXRoID0gZmxhdC5nZXQocGFyYW1zLCBjdXN0b20uZmlsZVBhdGhQcm9wZXJ0eSk7XG4gICAgY29uc3Qga2V5ID0gZmxhdC5nZXQocGFyYW1zLCBjdXN0b20ua2V5UHJvcGVydHkpO1xuICAgIGNvbnN0IGZpbGUgPSBmbGF0LmdldChwYXJhbXMsIGN1c3RvbS5maWxlUHJvcGVydHkpO1xuICAgIGNvbnN0IFtvcmlnaW5hbEtleSwgc2V0T3JpZ2luYWxLZXldID0gdXNlU3RhdGUoa2V5KTtcbiAgICBjb25zdCBbZmlsZXNUb1VwbG9hZCwgc2V0RmlsZXNUb1VwbG9hZF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gaXQgbWVhbnMgbWVhbnMgdGhhdCBzb21lb25lIGhpdCBzYXZlIGFuZCBuZXcgZmlsZSBoYXMgYmVlbiB1cGxvYWRlZFxuICAgICAgICAvLyBpbiB0aGlzIGNhc2UgZmxpZXNUb1VwbG9hZCBzaG91bGQgYmUgY2xlYXJlZC5cbiAgICAgICAgLy8gVGhpcyBoYXBwZW5zIHdoZW4gdXNlciB0dXJucyBvZmYgcmVkaXJlY3QgYWZ0ZXIgbmV3L2VkaXRcbiAgICAgICAgaWYgKCh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBrZXkgIT09IG9yaWdpbmFsS2V5KVxuICAgICAgICAgICAgfHwgKHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnICYmICFvcmlnaW5hbEtleSlcbiAgICAgICAgICAgIHx8ICh0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJyAmJiBBcnJheS5pc0FycmF5KGtleSkgJiYga2V5Lmxlbmd0aCAhPT0gb3JpZ2luYWxLZXkubGVuZ3RoKSkge1xuICAgICAgICAgICAgc2V0T3JpZ2luYWxLZXkoa2V5KTtcbiAgICAgICAgICAgIHNldEZpbGVzVG9VcGxvYWQoW10pO1xuICAgICAgICB9XG4gICAgfSwgW2tleSwgb3JpZ2luYWxLZXldKTtcbiAgICBjb25zdCBvblVwbG9hZCA9IChmaWxlcykgPT4ge1xuICAgICAgICBzZXRGaWxlc1RvVXBsb2FkKGZpbGVzKTtcbiAgICAgICAgb25DaGFuZ2UoY3VzdG9tLmZpbGVQcm9wZXJ0eSwgZmlsZXMpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlUmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICBvbkNoYW5nZShjdXN0b20uZmlsZVByb3BlcnR5LCBudWxsKTtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZU11bHRpUmVtb3ZlID0gKHNpbmdsZUtleSkgPT4ge1xuICAgICAgICBjb25zdCBpbmRleCA9IChmbGF0LmdldChyZWNvcmQucGFyYW1zLCBjdXN0b20ua2V5UHJvcGVydHkpIHx8IFtdKS5pbmRleE9mKHNpbmdsZUtleSk7XG4gICAgICAgIGNvbnN0IGZpbGVzVG9EZWxldGUgPSBmbGF0LmdldChyZWNvcmQucGFyYW1zLCBjdXN0b20uZmlsZXNUb0RlbGV0ZVByb3BlcnR5KSB8fCBbXTtcbiAgICAgICAgaWYgKHBhdGggJiYgcGF0aC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQYXRoID0gcGF0aC5tYXAoKGN1cnJlbnRQYXRoLCBpKSA9PiAoaSAhPT0gaW5kZXggPyBjdXJyZW50UGF0aCA6IG51bGwpKTtcbiAgICAgICAgICAgIGxldCBuZXdQYXJhbXMgPSBmbGF0LnNldChyZWNvcmQucGFyYW1zLCBjdXN0b20uZmlsZXNUb0RlbGV0ZVByb3BlcnR5LCBbLi4uZmlsZXNUb0RlbGV0ZSwgaW5kZXhdKTtcbiAgICAgICAgICAgIG5ld1BhcmFtcyA9IGZsYXQuc2V0KG5ld1BhcmFtcywgY3VzdG9tLmZpbGVQYXRoUHJvcGVydHksIG5ld1BhdGgpO1xuICAgICAgICAgICAgb25DaGFuZ2Uoe1xuICAgICAgICAgICAgICAgIC4uLnJlY29yZCxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IG5ld1BhcmFtcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdZb3UgY2Fubm90IHJlbW92ZSBmaWxlIHdoZW4gdGhlcmUgYXJlIG5vIHVwbG9hZGVkIGZpbGVzIHlldCcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUdyb3VwLCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExhYmVsLCBudWxsLCB0cmFuc2xhdGVQcm9wZXJ0eShwcm9wZXJ0eS5sYWJlbCwgcHJvcGVydHkucmVzb3VyY2VJZCkpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bab25lLCB7IG9uQ2hhbmdlOiBvblVwbG9hZCwgbXVsdGlwbGU6IGN1c3RvbS5tdWx0aXBsZSwgdmFsaWRhdGU6IHtcbiAgICAgICAgICAgICAgICBtaW1lVHlwZXM6IGN1c3RvbS5taW1lVHlwZXMsXG4gICAgICAgICAgICAgICAgbWF4U2l6ZTogY3VzdG9tLm1heFNpemUsXG4gICAgICAgICAgICB9LCBmaWxlczogZmlsZXNUb1VwbG9hZCB9KSxcbiAgICAgICAgIWN1c3RvbS5tdWx0aXBsZSAmJiBrZXkgJiYgcGF0aCAmJiAhZmlsZXNUb1VwbG9hZC5sZW5ndGggJiYgZmlsZSAhPT0gbnVsbCAmJiAoUmVhY3QuY3JlYXRlRWxlbWVudChEcm9wWm9uZUl0ZW0sIHsgZmlsZW5hbWU6IGtleSwgc3JjOiBwYXRoLCBvblJlbW92ZTogaGFuZGxlUmVtb3ZlIH0pKSxcbiAgICAgICAgY3VzdG9tLm11bHRpcGxlICYmIGtleSAmJiBrZXkubGVuZ3RoICYmIHBhdGggPyAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwga2V5Lm1hcCgoc2luZ2xlS2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgLy8gd2hlbiB3ZSByZW1vdmUgaXRlbXMgd2Ugc2V0IG9ubHkgcGF0aCBpbmRleCB0byBudWxscy5cbiAgICAgICAgICAgIC8vIGtleSBpcyBzdGlsbCB0aGVyZS4gVGhpcyBpcyBiZWNhdXNlXG4gICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIG1haW50YWluIGFsbCB0aGUgaW5kZXhlcy4gU28gaGVyZSB3ZSBzaW1wbHkgZmlsdGVyIG91dCBlbGVtZW50cyB3aGljaFxuICAgICAgICAgICAgLy8gd2VyZSByZW1vdmVkIGFuZCBkaXNwbGF5IG9ubHkgd2hhdCB3YXMgbGVmdFxuICAgICAgICAgICAgY29uc3QgY3VycmVudFBhdGggPSBwYXRoW2luZGV4XTtcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50UGF0aCA/IChSZWFjdC5jcmVhdGVFbGVtZW50KERyb3Bab25lSXRlbSwgeyBrZXk6IHNpbmdsZUtleSwgZmlsZW5hbWU6IHNpbmdsZUtleSwgc3JjOiBwYXRoW2luZGV4XSwgb25SZW1vdmU6ICgpID0+IGhhbmRsZU11bHRpUmVtb3ZlKHNpbmdsZUtleSkgfSkpIDogJyc7XG4gICAgICAgIH0pKSkgOiAnJykpO1xufTtcbmV4cG9ydCBkZWZhdWx0IEVkaXQ7XG4iLCJleHBvcnQgY29uc3QgQXVkaW9NaW1lVHlwZXMgPSBbXG4gICAgJ2F1ZGlvL2FhYycsXG4gICAgJ2F1ZGlvL21pZGknLFxuICAgICdhdWRpby94LW1pZGknLFxuICAgICdhdWRpby9tcGVnJyxcbiAgICAnYXVkaW8vb2dnJyxcbiAgICAnYXBwbGljYXRpb24vb2dnJyxcbiAgICAnYXVkaW8vb3B1cycsXG4gICAgJ2F1ZGlvL3dhdicsXG4gICAgJ2F1ZGlvL3dlYm0nLFxuICAgICdhdWRpby8zZ3BwMicsXG5dO1xuZXhwb3J0IGNvbnN0IFZpZGVvTWltZVR5cGVzID0gW1xuICAgICd2aWRlby94LW1zdmlkZW8nLFxuICAgICd2aWRlby9tcGVnJyxcbiAgICAndmlkZW8vb2dnJyxcbiAgICAndmlkZW8vbXAydCcsXG4gICAgJ3ZpZGVvL3dlYm0nLFxuICAgICd2aWRlby8zZ3BwJyxcbiAgICAndmlkZW8vM2dwcDInLFxuXTtcbmV4cG9ydCBjb25zdCBJbWFnZU1pbWVUeXBlcyA9IFtcbiAgICAnaW1hZ2UvYm1wJyxcbiAgICAnaW1hZ2UvZ2lmJyxcbiAgICAnaW1hZ2UvanBlZycsXG4gICAgJ2ltYWdlL3BuZycsXG4gICAgJ2ltYWdlL3N2Zyt4bWwnLFxuICAgICdpbWFnZS92bmQubWljcm9zb2Z0Lmljb24nLFxuICAgICdpbWFnZS90aWZmJyxcbiAgICAnaW1hZ2Uvd2VicCcsXG5dO1xuZXhwb3J0IGNvbnN0IENvbXByZXNzZWRNaW1lVHlwZXMgPSBbXG4gICAgJ2FwcGxpY2F0aW9uL3gtYnppcCcsXG4gICAgJ2FwcGxpY2F0aW9uL3gtYnppcDInLFxuICAgICdhcHBsaWNhdGlvbi9nemlwJyxcbiAgICAnYXBwbGljYXRpb24vamF2YS1hcmNoaXZlJyxcbiAgICAnYXBwbGljYXRpb24veC10YXInLFxuICAgICdhcHBsaWNhdGlvbi96aXAnLFxuICAgICdhcHBsaWNhdGlvbi94LTd6LWNvbXByZXNzZWQnLFxuXTtcbmV4cG9ydCBjb25zdCBEb2N1bWVudE1pbWVUeXBlcyA9IFtcbiAgICAnYXBwbGljYXRpb24veC1hYml3b3JkJyxcbiAgICAnYXBwbGljYXRpb24veC1mcmVlYXJjJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLmFtYXpvbi5lYm9vaycsXG4gICAgJ2FwcGxpY2F0aW9uL21zd29yZCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmRvY3VtZW50JyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLWZvbnRvYmplY3QnLFxuICAgICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnByZXNlbnRhdGlvbicsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuc3ByZWFkc2hlZXQnLFxuICAgICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnRleHQnLFxuICAgICdhcHBsaWNhdGlvbi92bmQubXMtcG93ZXJwb2ludCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC5wcmVzZW50YXRpb25tbC5wcmVzZW50YXRpb24nLFxuICAgICdhcHBsaWNhdGlvbi92bmQucmFyJyxcbiAgICAnYXBwbGljYXRpb24vcnRmJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJyxcbiAgICAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnLFxuXTtcbmV4cG9ydCBjb25zdCBUZXh0TWltZVR5cGVzID0gW1xuICAgICd0ZXh0L2NzcycsXG4gICAgJ3RleHQvY3N2JyxcbiAgICAndGV4dC9odG1sJyxcbiAgICAndGV4dC9jYWxlbmRhcicsXG4gICAgJ3RleHQvamF2YXNjcmlwdCcsXG4gICAgJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICdhcHBsaWNhdGlvbi9sZCtqc29uJyxcbiAgICAndGV4dC9qYXZhc2NyaXB0JyxcbiAgICAndGV4dC9wbGFpbicsXG4gICAgJ2FwcGxpY2F0aW9uL3hodG1sK3htbCcsXG4gICAgJ2FwcGxpY2F0aW9uL3htbCcsXG4gICAgJ3RleHQveG1sJyxcbl07XG5leHBvcnQgY29uc3QgQmluYXJ5RG9jc01pbWVUeXBlcyA9IFtcbiAgICAnYXBwbGljYXRpb24vZXB1Yit6aXAnLFxuICAgICdhcHBsaWNhdGlvbi9wZGYnLFxuXTtcbmV4cG9ydCBjb25zdCBGb250TWltZVR5cGVzID0gW1xuICAgICdmb250L290ZicsXG4gICAgJ2ZvbnQvdHRmJyxcbiAgICAnZm9udC93b2ZmJyxcbiAgICAnZm9udC93b2ZmMicsXG5dO1xuZXhwb3J0IGNvbnN0IE90aGVyTWltZVR5cGVzID0gW1xuICAgICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nLFxuICAgICdhcHBsaWNhdGlvbi94LWNzaCcsXG4gICAgJ2FwcGxpY2F0aW9uL3ZuZC5hcHBsZS5pbnN0YWxsZXIreG1sJyxcbiAgICAnYXBwbGljYXRpb24veC1odHRwZC1waHAnLFxuICAgICdhcHBsaWNhdGlvbi94LXNoJyxcbiAgICAnYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2gnLFxuICAgICd2bmQudmlzaW8nLFxuICAgICdhcHBsaWNhdGlvbi92bmQubW96aWxsYS54dWwreG1sJyxcbl07XG5leHBvcnQgY29uc3QgTWltZVR5cGVzID0gW1xuICAgIC4uLkF1ZGlvTWltZVR5cGVzLFxuICAgIC4uLlZpZGVvTWltZVR5cGVzLFxuICAgIC4uLkltYWdlTWltZVR5cGVzLFxuICAgIC4uLkNvbXByZXNzZWRNaW1lVHlwZXMsXG4gICAgLi4uRG9jdW1lbnRNaW1lVHlwZXMsXG4gICAgLi4uVGV4dE1pbWVUeXBlcyxcbiAgICAuLi5CaW5hcnlEb2NzTWltZVR5cGVzLFxuICAgIC4uLk90aGVyTWltZVR5cGVzLFxuICAgIC4uLkZvbnRNaW1lVHlwZXMsXG4gICAgLi4uT3RoZXJNaW1lVHlwZXMsXG5dO1xuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIEljb24gfSBmcm9tICdAYWRtaW5qcy9kZXNpZ24tc3lzdGVtJztcbmltcG9ydCB7IGZsYXQgfSBmcm9tICdhZG1pbmpzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBdWRpb01pbWVUeXBlcywgSW1hZ2VNaW1lVHlwZXMgfSBmcm9tICcuLi90eXBlcy9taW1lLXR5cGVzLnR5cGUuanMnO1xuY29uc3QgU2luZ2xlRmlsZSA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgcGF0aCwgbWltZVR5cGUsIHdpZHRoIH0gPSBwcm9wcztcbiAgICBpZiAocGF0aCAmJiBwYXRoLmxlbmd0aCkge1xuICAgICAgICBpZiAobWltZVR5cGUgJiYgSW1hZ2VNaW1lVHlwZXMuaW5jbHVkZXMobWltZVR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgeyBzcmM6IHBhdGgsIHN0eWxlOiB7IG1heEhlaWdodDogd2lkdGgsIG1heFdpZHRoOiB3aWR0aCB9LCBhbHQ6IG5hbWUgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtaW1lVHlwZSAmJiBBdWRpb01pbWVUeXBlcy5pbmNsdWRlcyhtaW1lVHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImF1ZGlvXCIsIHsgY29udHJvbHM6IHRydWUsIHNyYzogcGF0aCB9LFxuICAgICAgICAgICAgICAgIFwiWW91ciBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlXCIsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImNvZGVcIiwgbnVsbCwgXCJhdWRpb1wiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwidHJhY2tcIiwgeyBraW5kOiBcImNhcHRpb25zXCIgfSkpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQm94LCBudWxsLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBhczogXCJhXCIsIGhyZWY6IHBhdGgsIG1sOiBcImRlZmF1bHRcIiwgc2l6ZTogXCJzbVwiLCByb3VuZGVkOiB0cnVlLCB0YXJnZXQ6IFwiX2JsYW5rXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyBpY29uOiBcIkRvY3VtZW50RG93bmxvYWRcIiwgY29sb3I6IFwid2hpdGVcIiwgbXI6IFwiZGVmYXVsdFwiIH0pLFxuICAgICAgICAgICAgbmFtZSkpKTtcbn07XG5jb25zdCBGaWxlID0gKHsgd2lkdGgsIHJlY29yZCwgcHJvcGVydHkgfSkgPT4ge1xuICAgIGNvbnN0IHsgY3VzdG9tIH0gPSBwcm9wZXJ0eTtcbiAgICBsZXQgcGF0aCA9IGZsYXQuZ2V0KHJlY29yZD8ucGFyYW1zLCBjdXN0b20uZmlsZVBhdGhQcm9wZXJ0eSk7XG4gICAgaWYgKCFwYXRoKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBuYW1lID0gZmxhdC5nZXQocmVjb3JkPy5wYXJhbXMsIGN1c3RvbS5maWxlTmFtZVByb3BlcnR5ID8gY3VzdG9tLmZpbGVOYW1lUHJvcGVydHkgOiBjdXN0b20ua2V5UHJvcGVydHkpO1xuICAgIGNvbnN0IG1pbWVUeXBlID0gY3VzdG9tLm1pbWVUeXBlUHJvcGVydHlcbiAgICAgICAgJiYgZmxhdC5nZXQocmVjb3JkPy5wYXJhbXMsIGN1c3RvbS5taW1lVHlwZVByb3BlcnR5KTtcbiAgICBpZiAoIXByb3BlcnR5LmN1c3RvbS5tdWx0aXBsZSkge1xuICAgICAgICBpZiAoY3VzdG9tLm9wdHMgJiYgY3VzdG9tLm9wdHMuYmFzZVVybCkge1xuICAgICAgICAgICAgcGF0aCA9IGAke2N1c3RvbS5vcHRzLmJhc2VVcmx9LyR7bmFtZX1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChTaW5nbGVGaWxlLCB7IHBhdGg6IHBhdGgsIG5hbWU6IG5hbWUsIHdpZHRoOiB3aWR0aCwgbWltZVR5cGU6IG1pbWVUeXBlIH0pKTtcbiAgICB9XG4gICAgaWYgKGN1c3RvbS5vcHRzICYmIGN1c3RvbS5vcHRzLmJhc2VVcmwpIHtcbiAgICAgICAgY29uc3QgYmFzZVVybCA9IGN1c3RvbS5vcHRzLmJhc2VVcmwgfHwgJyc7XG4gICAgICAgIHBhdGggPSBwYXRoLm1hcCgoc2luZ2xlUGF0aCwgaW5kZXgpID0+IGAke2Jhc2VVcmx9LyR7bmFtZVtpbmRleF19YCk7XG4gICAgfVxuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgcGF0aC5tYXAoKHNpbmdsZVBhdGgsIGluZGV4KSA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChTaW5nbGVGaWxlLCB7IGtleTogc2luZ2xlUGF0aCwgcGF0aDogc2luZ2xlUGF0aCwgbmFtZTogbmFtZVtpbmRleF0sIHdpZHRoOiB3aWR0aCwgbWltZVR5cGU6IG1pbWVUeXBlW2luZGV4XSB9KSkpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgRmlsZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmlsZSBmcm9tICcuL2ZpbGUuanMnO1xuY29uc3QgTGlzdCA9IChwcm9wcykgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmlsZSwgeyB3aWR0aDogMTAwLCAuLi5wcm9wcyB9KSk7XG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuIiwiaW1wb3J0IHsgRm9ybUdyb3VwLCBMYWJlbCB9IGZyb20gJ0BhZG1pbmpzL2Rlc2lnbi1zeXN0ZW0nO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdhZG1pbmpzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmlsZSBmcm9tICcuL2ZpbGUuanMnO1xuY29uc3QgU2hvdyA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHsgcHJvcGVydHkgfSA9IHByb3BzO1xuICAgIGNvbnN0IHsgdHJhbnNsYXRlUHJvcGVydHkgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm1Hcm91cCwgbnVsbCxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMYWJlbCwgbnVsbCwgdHJhbnNsYXRlUHJvcGVydHkocHJvcGVydHkubGFiZWwsIHByb3BlcnR5LnJlc291cmNlSWQpKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChGaWxlLCB7IHdpZHRoOiBcIjEwMCVcIiwgLi4ucHJvcHMgfSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTaG93O1xuIiwiQWRtaW5KUy5Vc2VyQ29tcG9uZW50cyA9IHt9XG5pbXBvcnQgRGFzaGJvYXJkIGZyb20gJy4uL3NyYy9hZG1pbi9jb21wb25lbnRzL2Rhc2hib2FyZCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuRGFzaGJvYXJkID0gRGFzaGJvYXJkXG5pbXBvcnQgUGhvdG8gZnJvbSAnLi4vc3JjL2FkbWluL2NvbXBvbmVudHMvcGhvdG8nXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlBob3RvID0gUGhvdG9cbmltcG9ydCBVcGxvYWRFZGl0Q29tcG9uZW50IGZyb20gJy4uL25vZGVfbW9kdWxlcy9AYWRtaW5qcy91cGxvYWQvYnVpbGQvZmVhdHVyZXMvdXBsb2FkLWZpbGUvY29tcG9uZW50cy9VcGxvYWRFZGl0Q29tcG9uZW50J1xuQWRtaW5KUy5Vc2VyQ29tcG9uZW50cy5VcGxvYWRFZGl0Q29tcG9uZW50ID0gVXBsb2FkRWRpdENvbXBvbmVudFxuaW1wb3J0IFVwbG9hZExpc3RDb21wb25lbnQgZnJvbSAnLi4vbm9kZV9tb2R1bGVzL0BhZG1pbmpzL3VwbG9hZC9idWlsZC9mZWF0dXJlcy91cGxvYWQtZmlsZS9jb21wb25lbnRzL1VwbG9hZExpc3RDb21wb25lbnQnXG5BZG1pbkpTLlVzZXJDb21wb25lbnRzLlVwbG9hZExpc3RDb21wb25lbnQgPSBVcGxvYWRMaXN0Q29tcG9uZW50XG5pbXBvcnQgVXBsb2FkU2hvd0NvbXBvbmVudCBmcm9tICcuLi9ub2RlX21vZHVsZXMvQGFkbWluanMvdXBsb2FkL2J1aWxkL2ZlYXR1cmVzL3VwbG9hZC1maWxlL2NvbXBvbmVudHMvVXBsb2FkU2hvd0NvbXBvbmVudCdcbkFkbWluSlMuVXNlckNvbXBvbmVudHMuVXBsb2FkU2hvd0NvbXBvbmVudCA9IFVwbG9hZFNob3dDb21wb25lbnQiXSwibmFtZXMiOlsiYXBpIiwiQXBpQ2xpZW50IiwiRGFzaGJvYXJkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJkYXRhIiwic2V0RGF0YSIsInVzZXJzQ291bnQiLCJhY3RpdmVVc2VyczdkIiwiYWRtaW5KU1ZlcnNpb24iLCJ1c2VFZmZlY3QiLCJtb3VudGVkIiwicmVzIiwiZ2V0RGFzaGJvYXJkIiwicGF5bG9hZCIsIk51bWJlciIsImUiLCJSZWFjdCIsImNyZWF0ZUVsZW1lbnQiLCJCb3giLCJweCIsInB5Iiwic3R5bGUiLCJmb250RmFtaWx5IiwiSGVhZGVyIiwiTG9hZGVyQmxvY2siLCJFcnJvclBsYWNlaG9sZGVyIiwidGV4dCIsIkZyYWdtZW50IiwiQ2FyZHNSb3ciLCJLcGlDYXJkIiwidGl0bGUiLCJ2YWx1ZSIsImZvcm1hdE51bWJlciIsImhpbnQiLCJtdCIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ2FwIiwiUGFuZWwiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicCIsInNyYyIsImFsdCIsIm1heFdpZHRoIiwibWFyZ2luQm90dG9tIiwib3BhY2l0eSIsIlRleHQiLCJjb2xvciIsImZvbnRTaXplIiwidGV4dEFsaWduIiwibGluZUhlaWdodCIsIm1iIiwiSDIiLCJmb250V2VpZ2h0IiwibGV0dGVyU3BhY2luZyIsInZhcmlhbnQiLCJtYXJnaW5Ub3AiLCJib3JkZXIiLCJib3JkZXJUb3AiLCJjaGlsZHJlbiIsInJvdW5kZWQiLCJiYWNrZ3JvdW5kIiwiYm94U2hhZG93IiwidHJhbnNpdGlvbiIsImN1cnNvciIsImFuaW1hdGlvbiIsIm9uTW91c2VFbnRlciIsImN1cnJlbnRUYXJnZXQiLCJ0cmFuc2Zvcm0iLCJvbk1vdXNlTGVhdmUiLCJMYWJlbCIsImFzIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIm1pbkhlaWdodCIsIkxvYWRlciIsIm4iLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiZm9ybWF0IiwiU3RyaW5nIiwiUGhvdG8iLCJyZWNvcmQiLCJwcm9wZXJ0eSIsInVybEZyb21QaG90b1VybCIsInBhcmFtcyIsInBob3RvVXJsIiwia2V5IiwicGhvdG8iLCJBZG1pbkpTIiwiZW52IiwiQURNSU5fQVBJX0JBU0VfVVJMIiwibWF4SGVpZ2h0Iiwib2JqZWN0Rml0IiwidXNlVHJhbnNsYXRpb24iLCJmbGF0IiwiRm9ybUdyb3VwIiwiRHJvcFpvbmUiLCJEcm9wWm9uZUl0ZW0iLCJCdXR0b24iLCJJY29uIiwiVXNlckNvbXBvbmVudHMiLCJVcGxvYWRFZGl0Q29tcG9uZW50IiwiVXBsb2FkTGlzdENvbXBvbmVudCIsIlVwbG9hZFNob3dDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7RUFJQSxNQUFNQSxHQUFHLEdBQUcsSUFBSUMsaUJBQVMsRUFBRTtFQUVaLFNBQVNDLFNBQVNBLEdBQUc7SUFDbEMsTUFBTSxDQUFDQyxPQUFPLEVBQUVDLFVBQVUsQ0FBQyxHQUFHQyxnQkFBUSxDQUFDLElBQUksQ0FBQztJQUM1QyxNQUFNLENBQUNDLEtBQUssRUFBRUMsUUFBUSxDQUFDLEdBQUdGLGdCQUFRLENBQUMsRUFBRSxDQUFDO0VBQ3RDLEVBQUEsTUFBTSxDQUFDRyxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHSixnQkFBUSxDQUFDO0VBQy9CSyxJQUFBQSxVQUFVLEVBQUUsQ0FBQztFQUNiQyxJQUFBQSxhQUFhLEVBQUUsQ0FBQztFQUNoQkMsSUFBQUEsY0FBYyxFQUFFO0VBQ2xCLEdBQUMsQ0FBQztFQUVGQyxFQUFBQSxpQkFBUyxDQUFDLE1BQU07TUFDZCxJQUFJQyxPQUFPLEdBQUcsSUFBSTtFQUNsQixJQUFBLENBQUMsWUFBWTtRQUNYLElBQUk7RUFDRixRQUFBLE1BQU1DLEdBQUcsR0FBRyxNQUFNZixHQUFHLENBQUNnQixZQUFZLEVBQUU7RUFDcEMsUUFBQSxJQUFJRixPQUFPLEVBQUU7RUFDWCxVQUFBLE1BQU1HLE9BQU8sR0FBR0YsR0FBRyxFQUFFUCxJQUFJLElBQUksRUFBRTtFQUMvQkMsVUFBQUEsT0FBTyxDQUFDO2NBQ05DLFVBQVUsRUFBRVEsTUFBTSxDQUFDRCxPQUFPLENBQUNQLFVBQVUsQ0FBQyxJQUFJLENBQUM7Y0FDM0NDLGFBQWEsRUFBRU8sTUFBTSxDQUFDRCxPQUFPLENBQUNOLGFB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
