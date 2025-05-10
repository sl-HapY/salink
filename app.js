        const terminal = document.getElementById('terminal');
        const searchHistory = document.getElementById('search-history');
        const inputContainer = document.getElementById('input-container');
        const logo = document.getElementById('logo');

        let settings = {
            searchEngine: 'duckduckgo',
            language: 'fa',
            theme: 'default'
        };
        // بخش translations که باید به آن اضافه شود
        const translations = {
            fa: {
                welcome: "به سالینک خوش آمدید!",
                helpInfo: "برای مشاهده لیست دستورات و راهنمای استفاده، دستور <span class='prompt'>help</span> را وارد کنید.",
                understand: "متوجه شدم",
                logoText: "",
                commands: "لیست دستورات قابل استفاده:",
                examples: "مثال‌ها:",
                searchCommand: "جستجوی عبارت در موتور جستجوی فعلی (می‌توانید مستقیماً عبارت را بدون دستور search وارد کنید)",
                engineCommand: "تغییر موتور جستجو (گزینه‌ها: duckduckgo, google, bing)",
                langCommand: "تغییر زبان رابط کاربری (گزینه‌ها: fa, en, ru)",
                themeCommand: "تغییر تم ظاهری (گزینه‌ها: default, light, blue, hacker, pink)",
                clearCommand: "پاک کردن تاریخچه ترمینال",
                helpCommand: "نمایش این راهنما",
                ipCommand: "نمایش آدرس IP شما",
                titleCommand: "تغییر عنوان ASCII art بالای صفحه (فقط حروف انگلیسی)",
                titleChanged: "عنوان ASCII art تغییر یافت.",
                titleLimitWarning: "توجه: عنوان به حداکثر 15 کاراکتر محدود شده و فقط حروف انگلیسی مجاز هستند.",
                searchingFor: "ارسال درخواست به سرور",
                invalidEngine: "موتور جستجوی نامعتبر. گزینه‌های مجاز: duckduckgo, google, bing",
                invalidLang: "زبان نامعتبر. گزینه‌های مجاز: fa, en, ru",
                invalidTheme: "تم نامعتبر. گزینه‌های مجاز: default, light, blue, hacker, pink",
                enterSearchTerm: "لطفاً عبارت جستجو را وارد کنید.",
                engineChanged: "موتور جستجو به {{engine}} تغییر یافت.",
                langChanged: "زبان به {{lang}} تغییر یافت.",
                themeChanged: "تم به {{theme}} تغییر یافت.",
                historyCleared: "تاریخچه ترمینال پاک شد.",
                searchPlaceholder: "جستجو کنید...",
                yourIp: "آدرس IP شما:",
                ipError: "خطا در دریافت آدرس IP",
                fetchingIp: "در حال دریافت آدرس IP..."
            },
            en: {
                welcome: "Welcome to salink!",
                helpInfo: "To see a list of commands and usage guide, enter the <span class='prompt'>help</span> command.",
                understand: "I understand",
                logoText: "",
                commands: "List of available commands:",
                examples: "Examples:",
                searchCommand: "Search for a term in the current search engine (you can directly enter the term without the search command)",
                engineCommand: "Change the search engine (options: duckduckgo, google, bing)",
                langCommand: "Change the user interface language (options: fa, en, ru)",
                themeCommand: "Change the visual theme (options: default, light, blue, hacker, pink)",
                clearCommand: "Clear terminal history",
                helpCommand: "Display this help",
                ipCommand: "Display your IP address",
                titleCommand: "Change the ASCII art title at the top of the page (English letters only)",
                titleChanged: "ASCII art title changed.",
                titleLimitWarning: "Note: Title is limited to 15 characters and only English letters are allowed.",
                searchingFor: "Sending request to server",
                invalidEngine: "Invalid search engine. Valid options: duckduckgo, google, bing",
                invalidLang: "Invalid language. Valid options: fa, en, ru",
                invalidTheme: "Invalid theme. Valid options: default, light, blue, hacker, pink",
                enterSearchTerm: "Please enter a search term.",
                engineChanged: "Search engine changed to {{engine}}.",
                langChanged: "Language changed to {{lang}}.",
                themeChanged: "Theme changed to {{theme}}.",
                historyCleared: "Terminal history cleared.",
                searchPlaceholder: "Search...",
                yourIp: "Your IP address:",
                ipError: "Error retrieving IP address",
                fetchingIp: "Fetching IP address..."
            },
            ru: {
                welcome: "Добро пожаловать в Салинк!",
                helpInfo: "Чтобы увидеть список команд и руководство по использованию, введите команду <span class='prompt'>help</span>.",
                understand: "Я понимаю",
                logoText: "",
                commands: "Список доступных команд:",
                examples: "Примеры:",
                searchCommand: "Поиск термина в текущей поисковой системе (вы можете напрямую ввести термин без команды search)",
                engineCommand: "Изменить поисковую систему (опции: duckduckgo, google, bing)",
                langCommand: "Изменить язык пользовательского интерфейса (опции: fa, en, ru)",
                themeCommand: "Изменить визуальную тему (опции: default, light, blue, hacker, pink)",
                clearCommand: "Очистить историю терминала",
                helpCommand: "Показать эту справку",
                ipCommand: "Показать ваш IP-адрес",
                titleCommand: "Изменить заголовок ASCII art вверху страницы (только английские буквы)",
                titleChanged: "Заголовок ASCII art изменен.",
                titleLimitWarning: "Примечание: Заголовок ограничен 15 символами и разрешены только английские буквы.",
                searchingFor: "Отправка запроса на сервер",
                invalidEngine: "Недействительная поисковая система. Допустимые варианты: duckduckgo, google, bing",
                invalidLang: "Недействительный язык. Допустимые варианты: fa, en, ru",
                invalidTheme: "Недействительная тема. Допустимые варианты: default, light, blue, hacker, pink",
                enterSearchTerm: "Пожалуйста, введите поисковый запрос.",
                engineChanged: "Поисковая система изменена на {{engine}}.",
                langChanged: "Язык изменен на {{lang}}.",
                themeChanged: "Тема изменена на {{theme}}.",
                historyCleared: "История терминала очищена.",
                searchPlaceholder: "Поиск...",
                yourIp: "Ваш IP-адрес:",
                ipError: "Ошибка при получении IP-адреса",
                fetchingIp: "Получение IP-адреса..."
            }
        };

        function t(key, replacements = {}) {
            let text = translations[settings.language][key] || translations.en[key];

            Object.keys(replacements).forEach(replaceKey => {
                text = text.replace(`{{${replaceKey}}}`, replacements[replaceKey]);
            });

            return text;
        }

        function showWelcomePopup() {
            if (localStorage.getItem('welcomeShown')) {
                return;
            }

            const overlay = document.createElement('div');
            overlay.className = 'popup-overlay';

            const popup = document.createElement('div');
            popup.className = 'popup';
            popup.innerHTML = `
                <div class="popup-title">${t('welcome')}</div>
                <div class="popup-content">
                    ${t('helpInfo')}
                </div>
                <button class="popup-button">${t('understand')}</button>
            `;

            document.body.appendChild(overlay);
            document.body.appendChild(popup);

            popup.querySelector('.popup-button').addEventListener('click', function () {
                document.body.removeChild(overlay);
                document.body.removeChild(popup);
                localStorage.setItem('welcomeShown', 'true');
            });
        }

        function changeLanguage(lang) {
            settings.language = lang;

            if (lang === 'fa') {
                document.documentElement.setAttribute('dir', 'rtl');
                document.documentElement.setAttribute('lang', 'fa');
            } else {
                document.documentElement.setAttribute('dir', 'ltr');
                document.documentElement.setAttribute('lang', lang);
            }

            logo.querySelector('p').textContent = t('logoText');

            return t('langChanged', { lang: getLangName(lang) });
        }

        function getLangName(lang) {
            switch (lang) {
                case 'fa': return 'فارسی';
                case 'en': return 'English';
                case 'ru': return 'Русский';
                default: return lang;
            }
        }

        function changeSearchEngine(engine) {
            settings.searchEngine = engine;
            return t('engineChanged', { engine: getEngineName(engine) });
        }

        function getEngineName(engine) {
            switch (engine) {
                case 'duckduckgo': return settings.language === 'fa' ? 'داک داک گو' : (settings.language === 'ru' ? 'DuckDuckGo' : 'DuckDuckGo');
                case 'google': return settings.language === 'fa' ? 'گوگل' : (settings.language === 'ru' ? 'Google' : 'Google');
                case 'bing': return settings.language === 'fa' ? 'بینگ' : (settings.language === 'ru' ? 'Bing' : 'Bing');
                default: return engine;
            }
        }

        function changeTheme(theme) {
            settings.theme = theme;
            document.body.classList.remove('theme-light', 'theme-blue', 'theme-hacker', 'theme-pink');

            if (theme !== 'default') {
                document.body.classList.add(`theme-${theme}`);
            }

            return t('themeChanged', { theme: getThemeName(theme) });
        }

        function getThemeName(theme) {
            switch (theme) {
                case 'default':
                    return settings.language === 'fa' ? 'پیش‌فرض (تیره)' :
                        (settings.language === 'ru' ? 'по умолчанию (темный)' : 'default (dark)');
                case 'light':
                    return settings.language === 'fa' ? 'روشن' :
                        (settings.language === 'ru' ? 'светлый' : 'light');
                case 'blue':
                    return settings.language === 'fa' ? 'آبی' :
                        (settings.language === 'ru' ? 'синий' : 'blue');
                case 'hacker':
                    return settings.language === 'fa' ? 'هکر' :
                        (settings.language === 'ru' ? 'хакер' : 'hacker');
                case 'pink':
                    return settings.language === 'fa' ? 'صورتی' :
                        (settings.language === 'ru' ? 'розовый' : 'pink');
                default:
                    return theme;
            }
        }
        function showHelp() {
            const helpOutput = document.createElement('div');
            helpOutput.className = 'command-output';
            helpOutput.innerHTML = `
            <div style="margin-bottom: 10px;">${t('commands')}</div>
            <table class="help-table">
                <tr>
                    <td class="command">search</td>
                    <td class="description">${t('searchCommand')}</td>
                </tr>
                <tr>
                    <td class="command">engine</td>
                    <td class="description">${t('engineCommand')}</td>
                </tr>
                <tr>
                    <td class="command">lang</td>
                    <td class="description">${t('langCommand')}</td>
                </tr>
                <tr>
                    <td class="command">theme</td>
                    <td class="description">${t('themeCommand')}</td>
                </tr>
                <tr>
                    <td class="command">clear</td>
                    <td class="description">${t('clearCommand')}</td>
                </tr>
                <tr>
                    <td class="command">ip</td>
                    <td class="description">${t('ipCommand')}</td>
                </tr>
                <tr>
                    <td class="command">title</td>
                    <td class="description">${t('titleCommand')}</td>
                </tr>
                <tr>
                    <td class="command">help</td>
                    <td class="description">${t('helpCommand')}</td>
                </tr>
            </table>
            <div style="margin-top: 10px;">${t('examples')}</div>
            <div style="margin-left: 15px; margin-top: 5px;">engine google</div>
            <div style="margin-left: 15px;">lang ru</div>
            <div style="margin-left: 15px;">theme blue</div>
            <div style="margin-left: 15px;">search persian gulf</div>
            <div style="margin-left: 15px;">title HapY</div>
            <div style="margin-left: 15px;">ip</div>
        `;

            return helpOutput;
        }


        // تابع createNewInputLine کامل
        function createNewInputLine() {
            inputContainer.innerHTML = '';

            const inputLine = document.createElement('div');
            inputLine.className = 'input-line';
            inputLine.innerHTML = `
            <span class="prompt">user@ddg</span>
            <span>:</span>
            <span class="directory">~/search</span>
            <span>$ </span>
            <input type="text" class="search-input" name="search-input" autocomplete="off" autofocus placeholder="${t('searchPlaceholder')}">
            <span class="blink">_</span>
        `;

            inputContainer.appendChild(inputLine);
            const searchInput = inputLine.querySelector('.search-input');

            searchInput.addEventListener('keydown', function (e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    const query = this.value.trim();
                    if (query) {
                        processCommand(query);
                    }
                }
            });

            searchInput.focus();
            terminal.scrollTop = terminal.scrollHeight;

            return searchInput;
        }

        async function getIpAddress() {
            const systemMessage = document.createElement('div');
            systemMessage.className = 'system-message';
            systemMessage.textContent = `[system]: ${t('fetchingIp')}`;
            searchHistory.appendChild(systemMessage);

            try {
                const response = await fetch('https://api.ipify.org/?format=json');
                if (!response.ok) throw new Error('Network response was not ok');

                const data = await response.json();

                const ipOutput = document.createElement('div');
                ipOutput.className = 'command-output';
                ipOutput.textContent = `${t('yourIp')} ${data.ip}`;
                searchHistory.appendChild(ipOutput);
            } catch (error) {
                const errorOutput = document.createElement('div');
                errorOutput.className = 'system-message';
                errorOutput.textContent = `[system]: ${t('ipError')} (${error.message})`;
                searchHistory.appendChild(errorOutput);
            }
        }
    // تابع generateAsciiArt کامل
    function generateAsciiArt(text) {
        // محدود کردن طول متن
        if (text.length > 15) {
            text = text.substring(0, 15);
        }

        // حروف فقط انگلیسی باشند
        text = text.replace(/[^a-zA-Z0-9 ]/g, '');

        // اگر متن خالی باشد، لوگوی پیش‌فرض را برگردان
        if (text.trim() === '') {
            return `<span style="direction: ltr; unicode-bidi: bidi-override; display: block;">

░██████╗░█████╗░██╗░░░░░██╗███╗░░██╗██╗░░██╗
██╔════╝██╔══██╗██║░░░░░██║████╗░██║██║░██╔╝
╚█████╗░███████║██║░░░░░██║██╔██╗██║█████═╝░
░╚═══██╗██╔══██║██║░░░░░██║██║╚████║██╔═██╗░
██████╔╝██║░░██║███████╗██║██║░╚███║██║░╚██╗
╚═════╝░╚═╝░░╚═╝╚══════╝╚═╝╚═╝░░╚══╝╚═╝░░╚═╝
                </span>`;
        }

        const asciiPatterns = {
            'A': [
                '▄▀█',
                '█▀█'
            ],
            'B': [
                '█▄▄',
                '█▄█'
            ],
            'C': [
                '█▀▀',
                '█▄▄'
            ],
            'D': [
                '█▀▄',
                '█▄▀'
            ],
            'E': [
                '█▀▀',
                '██▄'
            ],
            'F': [
                '█▀▀',
                '█▀░'
            ],
            'G': [
                '█▀▀',
                '█▄█'
            ],
            'H': [
                '█░█',
                '█▀█'
            ],
            'I': [
                '█',
                '█'
            ],
            'J': [
                '░░█',
                '█▄█'
            ],
            'K': [
                '█▄▀',
                '█░█'
            ],
            'L': [
                '█░░',
                '█▄▄'
            ],
            'M': [
                '█▀▄▀█',
                '█░▀░█'
            ],
            'N': [
                '█▄░█',
                '█░▀█'
            ],
            'O': [
                '█▀█',
                '█▄█'
            ],
            'P': [
                '█▀█',
                '█▀▀'
            ],
            'Q': [
                '█▀█',
                '▀▀█'
            ],
            'R': [
                '█▀█',
                '█▀▄'
            ],
            'S': [
                '█▀',
                '▄█'
            ],
            'T': [
                '▀█▀',
                '░█░'
            ],
            'U': [
                '█░█',
                '█▄█'
            ],
            'V': [
                '█░█',
                '▀▄▀'
            ],
            'W': [
                '█░█░█',
                '▀▄▀▄▀'
            ],
            'X': [
                '▀▄▀',
                '█░█'
            ],
            'Y': [
                '█▄█',
                '░█░'
            ],
            'Z': [
                '▀█',
                '█▄'
            ],
            ' ': [
                '   ',
                '   '
            ],
            '0': [
                '█▀█',
                '█▄█'
            ],
            '1': [
                '█',
                '█'
            ],
            '2': [
                '▀█',
                '█▄'
            ],
            '3': [
                '▀█',
                '▄█'
            ],
            '4': [
                '█░█',
                '▀▀█'
            ],
            '5': [
                '█▀',
                '▄█'
            ],
            '6': [
                '█▀',
                '█▄'
            ],
            '7': [
                '▀█',
                '░█'
            ],
            '8': [
                '█▀█',
                '█▀█'
            ],
            '9': [
                '█▀█',
                '▀▀█'
            ]
        };

        let result = ['', ''];

        for (let i = 0; i < text.length; i++) {
            const char = text[i].toUpperCase();
            const pattern = asciiPatterns[char] || asciiPatterns[' '];

            for (let j = 0; j < 2; j++) {
                result[j] += pattern[j] + ' ';
            }
        }

        return `<span style="direction: ltr; unicode-bidi: bidi-override; display: block; font-family: monospace;">${result.join('\n')}</span>`;
    }
        function processCommand(input) {
            const historyCommand = document.createElement('div');
            historyCommand.className = 'history-item';
            historyCommand.innerHTML = `<span class="prompt">user@ddg</span>:<span class="directory">~/search</span>$ ${input}`;
            searchHistory.appendChild(historyCommand);

            const parts = input.split(' ');
            const command = parts[0].toLowerCase();
            const args = parts.slice(1).join(' ');

            let output;

            switch (command) {
                case 'help':
                    output = showHelp();
                    break;

                case 'clear':
                    searchHistory.innerHTML = '';
                    output = document.createElement('div');
                    output.className = 'system-message';
                    output.textContent = `[system]: ${t('historyCleared')}`;
                    break;

                case 'engine':
                    if (['duckduckgo', 'google', 'bing'].includes(args)) {
                        const message = changeSearchEngine(args);
                        output = document.createElement('div');
                        output.className = 'system-message';
                        output.textContent = `[system]: ${message}`;
                    } else {
                        output = document.createElement('div');
                        output.className = 'system-message';
                        output.textContent = `[system]: ${t('invalidEngine')}`;
                    }
                    break;

                case 'lang':
                    if (['fa', 'en', 'ru'].includes(args)) {
                        const message = changeLanguage(args);
                        output = document.createElement('div');
                        output.className = 'system-message';
                        output.textContent = `[system]: ${message}`;
                    } else {
                        output = document.createElement('div');
                        output.className = 'system-message';
                        output.textContent = `[system]: ${t('invalidLang')}`;
                    }
                    break;

                case 'theme':
                    if (['default', 'light', 'blue', 'hacker', 'pink'].includes(args)) {
                        const message = changeTheme(args);
                        output = document.createElement('div');
                        output.className = 'system-message';
                        output.textContent = `[system]: ${message}`;
                    } else {
                        output = document.createElement('div');
                        output.className = 'system-message';
                        output.textContent = `[system]: ${t('invalidTheme')}`;
                    }
                    break;

                case 'ip':
                    getIpAddress();
                    break;

                case 'title':
                    if (args) {
                        const asciiArt = generateAsciiArt(args);
                        logo.querySelector('pre').innerHTML = asciiArt;

                        // نمایش نام در زیر ASCII art
                        const titleText = args.length > 15 ? args.substring(0, 15) : args;
                        logo.querySelector('p').textContent = titleText;

                        output = document.createElement('div');
                        output.className = 'system-message';
                        output.textContent = `[system]: ${t('titleChanged')} ${t('titleLimitWarning')}`;
                    } else {
                        // برگرداندن به لوگوی پیش‌فرض
                        logo.querySelector('pre').innerHTML = ``;
                        logo.querySelector('p').textContent = t('logoText');

                        output = document.createElement('div');
                        output.className = 'system-message';
                        output.textContent = `[system]: ${t('enterSearchTerm')}`;
                    }
                    break;

                case 'search':
                    if (args) {
                        performSearch(args);
                    } else {
                        output = document.createElement('div');
                        output.className = 'system-message';
                        output.textContent = `[system]: ${t('enterSearchTerm')}`;
                    }
                    break;

                default:
                    performSearch(input);
                    break;
            }

            if (output) {
                searchHistory.appendChild(output);
            }

            createNewInputLine();
        }
        function performSearch(query) {
            const systemMessage = document.createElement('div');
            systemMessage.className = 'system-message';
            systemMessage.innerHTML = `[system]: ${t('searchingFor')} ${getEngineName(settings.searchEngine)}...`;
            searchHistory.appendChild(systemMessage);

            const commandOutput = document.createElement('div');
            commandOutput.className = 'command-output';
            commandOutput.innerHTML = `$ ${settings.searchEngine}-search "${query}" --browser=default`;
            searchHistory.appendChild(commandOutput);

            let searchUrl;
            switch (settings.searchEngine) {
                case 'google':
                    searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
                    break;
                case 'bing':
                    searchUrl = `https://www.bing.com/search?q=${encodeURIComponent(query)}`;
                    break;
                case 'duckduckgo':
                default:
                    searchUrl = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
                    break;
            }

            window.open(searchUrl, '_blank');
        }

        window.onload = function () {
            createNewInputLine();
            setTimeout(showWelcomePopup, 1000);
        };
