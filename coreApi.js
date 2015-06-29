/**
 * Developer: Stepan Burguchev
 * Date: 5/21/2015
 * Copyright: 2009-2015 Comindware®
 *       All Rights Reserved
 *
 * THIS IS UNPUBLISHED PROPRIETARY SOURCE CODE OF Comindware
 *       The copyright notice above does not evidence any
 *       actual or intended publication of such source code.
 */

/* global define, require, Handlebars, Backbone, Marionette, $, _ */

define([
        './utils/utilsApi',
        './dropdown/dropdownApi',
        './list/listApi',
        './form/formApi',
        './serviceLocator',
        './collections/SlidingWindowCollection',
        './collections/VirtualCollection',
        './collections/behaviors/HighlightableBehavior',
        'core/models/behaviors/CollapsibleBehavior',
        'core/models/behaviors/HighlightableBehavior',
        'core/models/behaviors/SelectableBehavior',
        'core/views/behaviors/LoadingBehavior'
    ],
    function (
        utilsApi,
        dropdownApi,
        listApi,
        formApi,
        serviceLocator,
        SlidingWindowCollection,
        VirtualCollection,
        CollectionHighlightableBehavior,
        CollapsibleBehavior,
        HighlightableBehavior,
        SelectableBehavior,
        LoadingBehavior
    ) {
        'use strict';

        //noinspection UnnecessaryLocalVariableJS
        /**
         * Core UI components: основные компоненты для построение веб-интерфейса Comindware.
         * @exports core
         * */
        var exports = {
            /**
             * Backbone-коллекции общего назначения
             * @namespace
             * */
            collections: {
                /**
                 * Behavior-объекты общего назначения для Backbone-коллекций.
                 * @namespace
                 * */
                behaviors: {
                    HighlightableBehavior: CollectionHighlightableBehavior
                },
                SlidingWindowCollection: SlidingWindowCollection,
                VirtualCollection: VirtualCollection
            },
            /**
             * Backbone-модели общего назначения
             * @namespace
             * */
            models: {
                behaviors: {
                    CollapsibleBehavior: CollapsibleBehavior,
                    HighlightableBehavior: HighlightableBehavior,
                    SelectableBehavior: SelectableBehavior
                }
            },
            views: {
                behaviors: {
                    LoadingBehavior: LoadingBehavior
                }
            },
            /**
             * Dropdown-компоненты. Должны использоваться для любой логики выпадающих меню, панелей и подобного.
             * Не подпадающий под концепцию этих компонентов дизайн выпадающих элементов должен быть пересмотрен.
             * @namespace
             * */
            dropdown: dropdownApi,
            form: formApi,
            list: listApi,
            utils: utilsApi,
            serviceLocator: serviceLocator
        };
        return exports;
    });
