@echo off
chcp 65001 >nul
title Dust2 FPS

cd /d "D:\Reasonix\dust2-fps"

echo.
echo   🏜️  Dust2 FPS
echo   ═══════════════════════════
echo   WASD  移动      Space  跳跃
echo   左键  射击      R      换弹
echo   F     补弹药    Shift  奔跑
echo   🛡 护甲包    📦 弹药箱    ⚔ 近战敌人
echo   ═══════════════════════════
echo.

echo   启动服务器...
start "" /B npm run dev

echo   等待服务器就绪...
timeout /t 2 /nobreak >nul

echo   打开浏览器...
start "" http://localhost:3000

echo.
echo   ⚠ 关闭浏览器窗口后，按任意键停止服务器...

pause >nul

echo   正在停止服务器...
taskkill /f /im node.exe >nul 2>&1
echo   已停止。
pause
